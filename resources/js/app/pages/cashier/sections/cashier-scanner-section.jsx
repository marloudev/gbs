import React, { useState } from 'react'
import FormFieldInput from '../../../components/Input'
import store from './../../../../store/store'
import { get_specific_product_service } from '../../../../services/products-service'
import { addCartThunk } from '../redux/cashier-thunk'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../redux/cashier-slice'
export default function CashierScannerSection({ inputRef }) {
    const { search } = useSelector((state) => state.cashier);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    async function submitSearch(e) {
        setLoading(true)
        e.preventDefault()
        await store.dispatch(addCartThunk(get_specific_product_service(search)))
        setLoading(false)
    }
    function getSearch(value) {
        dispatch(setSearch(value))
    }
    return (
        <div className='m-10'>
            <form onCutCapture={submitSearch} onSubmit={submitSearch}>
                <FormFieldInput
                    inputRef={inputRef}
                    autofocus={true}
                    onChange={getSearch}
                    value={search}
                    name="search"
                    type="text"
                    label={`${loading ? 'Loading...' : 'Scanning Item'} `}
                // errorMessage="Searching..."
                />
                <button
                    type='submit'
                    disabled={loading}
                >

                </button>
            </form>
        </div>
    )
}
