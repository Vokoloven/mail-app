import { useWarehouses } from 'hooks/useWarehouses';
import { WarehouseCard } from 'components/ui/Cards';
import { useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectWarehouse } from 'redux/selectors';
import { Typography } from '@mui/material';
import { AdaptiveContainer } from 'components/container';
import { TWarehouseProps } from 'types/tWarehouse';

const Office = () => {
    const [page, setPage] = useState(1);
    const { warehouses } = useWarehouses(page);
    const { loading, hasNextPage } = useSelector(selectWarehouse);

    const intObserved = useRef<any>();
    const lastOfWarehouses = useCallback(
        (warehouse: TWarehouseProps<string>) => {
            if (loading === 'pending') return;

            if (intObserved.current) intObserved.current.disconnect();

            intObserved.current = new IntersectionObserver((warehouses) => {
                if (warehouses[0].isIntersecting && hasNextPage) {
                    console.log('We are at near last post');
                    setPage((prevPage) => prevPage + 1);
                }
            });

            if (warehouse) intObserved.current.observe(warehouse);
        },

        [hasNextPage, loading]
    );

    console.log(page);

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
            {loading === 'pending' && <Typography>Loading...</Typography>}
            {content}
        </AdaptiveContainer>
    );
};

export default Office;
