import Badge from '@mui/material/Badge';
import ListIcon from '@mui/icons-material/List';

export const CustomBadge = () => {
    return (
        <Badge
            badgeContent={7}
            max={99}
            color="error"
            sx={(theme) => ({
                [theme.breakpoints.up('tablet')]: {
                    display: 'none'
                }
            })}
        >
            <ListIcon sx={{ color: 'violet.contrastText' }} />
        </Badge>
    );
};
