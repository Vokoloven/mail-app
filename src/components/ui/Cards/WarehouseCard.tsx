import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { TWarehouseProps } from 'types/tWarehouse';

export const WarehouseCard = React.forwardRef<
    any,
    { warehouse: TWarehouseProps<string> }
>(({ warehouse: { Description, ShortAddress } }, ref) => {
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
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {Description.match(/[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ' №\d"()]+/)}
                </Typography>
                <Typography sx={{ mb: 2 }} color="text.secondary">
                    {ShortAddress}
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
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {Description.match(/[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ' №\d"()]+/)}
                </Typography>
                <Typography sx={{ mb: 2 }} color="text.secondary">
                    {ShortAddress}
                </Typography>
            </CardContent>
        </Card>
    );

    return content;
});
