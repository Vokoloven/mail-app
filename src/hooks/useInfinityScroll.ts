import { useWarehouses } from 'hooks/useWarehouses';
import { useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectWarehouse } from 'redux/selectors';
import { TWarehouseProps } from 'types/tWarehouse';

export const useInfinityScroll = () => {
    const [page, setPage] = useState(1);
    const { loading, hasNextPage } = useSelector(selectWarehouse);
    const { warehouses } = useWarehouses(page);

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

    return { lastOfWarehouses, warehouses, loading };
};
