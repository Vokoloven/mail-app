import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectService } from 'redux/selectors';
import { fetchWarehouses } from 'redux/serviceSlice';
import { AppDispatch } from 'redux/store';
import { TWarehouseProps } from 'types/tWarehouse';

export const useWarehouses = (page = 1) => {
    const [warehouses, setWarehouses] = useState<TWarehouseProps<string>[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const {
        data: { data }
    } = useSelector(selectService);
    const refCity = data?.[0]!;

    useEffect(() => {
        const getWarehouses = async () => {
            if (refCity?.RefCityRecipient) {
                const response = await dispatch(
                    fetchWarehouses({
                        cityRef: refCity?.RefCityRecipient,
                        page: String(page),
                        limit: '10'
                    })
                );

                if (response.type === 'tracking/fetchWarehouses/fulfilled')
                    setWarehouses((prevState) => [
                        ...prevState,
                        ...response.payload.data
                    ]);
            }
        };
        getWarehouses();
    }, [dispatch, page, refCity?.RefCityRecipient]);

    console.log(warehouses);

    return { warehouses };
};
