import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../cashier/redux/cashier-slice';
import store from '@/store/store';
import { get_products_service } from '@/services/products-service';
import { Link, router } from '@inertiajs/react';
import { setSearch } from '../redux/search-slice';
import { set_search_product_thunk } from '../redux/search-thunk';

export default function SearchSection() {
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(1)
    const { selectedItem, cart } = useSelector((state) => state.cashier);
    const { search } = useSelector((state) => state.search);
    const { products } = useSelector((state) => state.products);
    const cancelButtonRef = useRef(null)
    const inputRef = useRef(null)
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    const [searchData, setSearchData] = useState('')
    const [newProduct, setNewProduct] = useState({})
    useEffect(() => {
        store.dispatch(set_search_product_thunk(get_products_service(page, searchData)))
    }, [searchData]);

    // useEffect(() => {
    //     const handleKeyPress = (event) => {
    //         if ((event.key === 'I' || event.key === 'i')) {
    //             setOpen(true)
    //         }
    //     };

    //     window.addEventListener("keydown", handleKeyPress);
    //     return () => {
    //         window.removeEventListener("keydown", handleKeyPress);
    //     };
    // }, [amount]);
    useEffect(() => {

        const handleKeyPress = (event) => {
            if ((event.key === 'F' || event.key === 'f')) {
                // If 'F' key is pressed and autofocus prop is true
                inputRef.current.focus();
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [open]);

   
    function searchhandler(e) {
        e.preventDefault()
        setSearchData(search)
    }
    return (
       
                <div className="">

                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            Search Products
                        </div>
                        <div className="mt-2">
                            <div
                                className="text-sm text-black">
                                <form onSubmit={searchhandler}>
                                    <div className='flex gap-3'>
                                        <input
                                            ref={inputRef}
                                            autoFocus={true}
                                            value={search}
                                            onChange={(e) => dispatch(setSearch(e.target.value))}
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        <button
                                            type="submit"
                                            className='p-2 bg-red-600 hover:bg-red-500 text-white rounded-md'>
                                            Search
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
    )
}
