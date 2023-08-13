import { useSelector } from 'react-redux';
import { Box, Paper, Typography, Skeleton } from '@mui/material';
import { capitalize } from 'utils/capitalize';
import { selectService } from 'redux/selectors';

export const HomeCard = () => {
    const {
        loading,
        data: { data }
    } = useSelector(selectService);

    const items: {
        name: string;
        field: string;
    }[] = [
        { name: 'status', field: data?.[0].Status! },
        { name: 'sender', field: data?.[0].WarehouseSender! },
        { name: 'receiver', field: data?.[0].WarehouseRecipient! }
    ];

    return loading !== 'idle' ? (
        <Paper sx={{ mt: 4, p: 2 }} elevation={4}>
            <Box
                component={'ul'}
                sx={{
                    p: 0,
                    m: 0
                }}
            >
                {items.map(
                    ({ name, field }) =>
                        field && (
                            <Box
                                component={'li'}
                                key={name}
                                sx={{
                                    listStyle: 'none',
                                    '&:not(:last-child)': {
                                        mb: 1
                                    }
                                }}
                            >
                                <Typography
                                    variant={'h6'}
                                    component={'p'}
                                    sx={{ fontSize: 16 }}
                                >
                                    {loading === 'pending' ? (
                                        <Skeleton />
                                    ) : (
                                        `${capitalize(name)}: ${field}`
                                    )}
                                </Typography>
                            </Box>
                        )
                )}
            </Box>
        </Paper>
    ) : null;
};
