import { WarehouseCard } from 'components/ui/Cards';
import { Typography, Box, CircularProgress } from '@mui/material';
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
                />
            );
        }
        return <WarehouseCard key={warehouse.SiteKey} warehouse={warehouse} />;
    });

    return (
        <AdaptiveContainer>
            {content}
            {loading === 'succeeded' && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
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
