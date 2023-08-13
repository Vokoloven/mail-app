import { WarehouseCard } from 'components/ui/Cards';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import { AdaptiveContainer } from 'components/container';
import { useInfinityScroll } from 'hooks';

const Office = () => {
    const { loading, warehouses, lastOfWarehouses } = useInfinityScroll();

    const content = warehouses?.map((warehouse, i) => {
        if (warehouses?.length === i + 1) {
            return (
                <WarehouseCard
                    ref={lastOfWarehouses}
                    key={warehouse.SiteKey}
                    warehouse={warehouse}
                    loading={loading}
                />
            );
        }
        return (
            <WarehouseCard
                key={warehouse.SiteKey}
                warehouse={warehouse}
                loading={loading}
            />
        );
    });

    return (
        <AdaptiveContainer>
            {loading === 'idle' && (
                <Alert severity="warning">
                    For viewing nearest offices location, please write TTN
                    number on Home page.
                </Alert>
            )}
            {loading === 'succeeded' && !Boolean(warehouses.length) && (
                <Alert severity="warning">
                    Check your TTN number and send request again.
                </Alert>
            )}
            {Boolean(warehouses.length) && (
                <Typography
                    component={'h1'}
                    variant={'h4'}
                    sx={{ mb: 3, fontWeight: '500' }}
                >
                    Offices location
                </Typography>
            )}
            <Box
                sx={(theme) => ({
                    [theme.breakpoints.up('tablet')]: {
                        maxWidth: '420px',
                        ...(loading !== 'pending' && { pb: 8 })
                    }
                })}
            >
                {content}
            </Box>
            {loading === 'pending' && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pb: 4
                    }}
                >
                    <Typography component={'p'} variant={'h6'} sx={{ mr: 3 }}>
                        Loading...
                    </Typography>
                    <CircularProgress sx={{ color: 'violet.main' }} />
                </Box>
            )}
        </AdaptiveContainer>
    );
};

export default Office;
