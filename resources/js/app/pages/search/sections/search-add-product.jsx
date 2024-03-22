import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCart } from '../../cashier/redux/cashier-slice';
import store from '@/store/store';
import { addCartThunk } from '../../cashier/redux/cashier-thunk';
import { get_specific_product_service } from '@/services/products-service';

export default function SearchAddProduct({ data }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    async function addProduct() {
        setLoading(true)
        await store.dispatch(addCartThunk(get_specific_product_service(data.id)))
        setLoading(false)
    }

    return (
        <button
            className='p-2 bg-red-500 w-24 hover:bg-red-600 text-white rounded-md'
            onClick={addProduct}
        >
            {loading ? 'Loading...' : 'ADD'}
        </button>
    )
}
