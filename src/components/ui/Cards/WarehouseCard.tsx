import React from 'react';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';
import { TWarehouseProps } from 'types/tWarehouse';

export const WarehouseCard = React.forwardRef<
    any,
    {
        warehouse: TWarehouseProps<string>;
        loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    }
>(({ warehouse: { Description, ShortAddress }, loading }, ref) => {
    const content = ref ? (
        <Card
            ref={ref}
            sx={{
                minWidth: 275,
                '&:not(last-child)': {
                    mb: 2
                }
            }}
            elevation={4}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 14, fontWeight: 'bold' }}
                    color="text.secondary"
                    gutterBottom
                >
                    {loading === 'pending' ? (
                        <Skeleton />
                    ) : (
                        Description.match(/[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ' №\d"()]+/)
                    )}
                </Typography>
                <Typography color="text.secondary">
                    {' '}
                    {loading === 'pending' ? <Skeleton /> : ShortAddress}
                </Typography>
            </CardContent>
        </Card>
    ) : (
        <Card
            sx={{
                minWidth: 275,
                '&:not(last-child)': {
                    mb: 2
                }
            }}
            elevation={4}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 14, fontWeight: 'bold' }}
                    color="text.secondary"
                    gutterBottom
                >
                    {loading === 'pending' ? (
                        <Skeleton />
                    ) : (
                        Description.match(/[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ' №\d"()]+/)
                    )}
                </Typography>
                <Typography color="text.secondary">
                    {loading === 'pending' ? <Skeleton /> : ShortAddress}
                </Typography>
            </CardContent>
        </Card>
    );

    return content;
});
