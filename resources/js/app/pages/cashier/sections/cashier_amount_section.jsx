import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../redux/cashier-slice';
import store from '@/store/store';
import { getAllProductsThunk } from '../../administrator/products/redux/products-thunk';
import { get_products_service } from '@/services/products-service';
import { Link, router } from '@inertiajs/react';

export default function CashierAmountSection() {
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(1)
    const { selectedItem, cart } = useSelector((state) => state.cashier);
    const { products } = useSelector((state) => state.products);
    const cancelButtonRef = useRef(null)
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    const [search, setSearch] = useState(null)
    const [searchData, setSearchData] = useState('')
    const [newProduct, setNewProduct] = useState({})
    useEffect(() => {
        store.dispatch(getAllProductsThunk(get_products_service(page, searchData)))
    }, [searchData]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if ((event.key === 'I' || event.key === 'i')) {
                setOpen(true)
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [amount]);
    useEffect(() => {

        const handleKeyPress = (event) => {
            if ((event.key === 'F' || event.key === 'f')) {
                // If 'F' key is pressed and autofocus prop is true
                document.getElementById('paymentAmount').focus();
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [open]);

    function submitAmount(e) {
        e.preventDefault()
        // const randomId = Math.floor(1000000000 + Math.random() * 9000000000);
        // dispatch(setCart({
        //     ...cart,
        //     randomId: randomId,
        //     quantity: 1,
        //     id: randomId,
        //     description: 'N/A',
        //     total: parseFloat(amount),
        //     price: parseFloat(amount),
        //     registered: false
        // }));
        // console.log('newProduct',newProduct)
        dispatch(setCart({
            ...cart,
            ...newProduct
        }));
        router.visit('/cashier')
        // setOpen(false)
        // setAmount(0)
    }


    function getProducts(e) {
        const randomId = Math.floor(1000000000 + Math.random() * 9000000000);
        const value = e.target.value.split(',')
        const newValue = {
            ...cart,
            randomId: randomId,
            id: parseInt(value[0]),
            description: value[2],
            quantity: 1,
            total: parseFloat(value[4]),
            price: parseFloat(value[4]),
            registered: true
        }
        setNewProduct(newValue)
    }

    function searchhandler(e) {
        e.preventDefault()
        setSearchData(search)
    }
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <Link
                href='/cashier'
                // onClick={() => setOpen(true)}
                className="flex flex-col items-center p-5 justify-center bg-red-500">
                <div className='text-white'>
                    BACK
                </div>
            </Link>
            {/* <Link
                // onClick={() => setOpen(true)}
                className="flex flex-col items-center justify-center bg-red-500">
                <h1 className="text-white text-5xl leading-tight font-black">I</h1>
                <div className='text-white'>
                    ITEM
                </div>
            </Link>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="">

                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Input Amount
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <div
                                                        className="text-sm text-black">
                                                     <form onSubmit={searchhandler}>
                                                        Description
                                                        <div className='flex gap-3'>
                                                            <input
                                                                autoFocus={true}
                                                                value={search}
                                                                onChange={(e) => setSearch(e.target.value)}
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                                            <button
                                                                type="submit"
                                                                className='p-2 bg-red-600 hover:bg-red-500 text-white rounded-md'>
                                                                Search
                                                            </button>
                                                        </div>
                                                        </form>
                                                        Products
                                                        <form onSubmit={submitAmount}>
                                                            <select
                                                                onInput={getProducts}
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                                                                <option value="" disabled selected>Select Products</option>

                                                                {
                                                                    products.map((res, i) => {
                                                                        return <option key={i} value={Object.values(res)}>{res.description}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                <button
                                                                    type="submit"
                                                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"

                                                                >
                                                                    Submit
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                    onClick={() => setOpen(false)}
                                                                    ref={cancelButtonRef}
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </form>
                                                        Products

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root> */}
               <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="">

                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <div as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Input Amount
                                                </div>
                                                <div className="mt-2">
                                                    <div
                                                        className="text-sm text-black">
                                                     <form onSubmit={searchhandler}>
                                                        Description
                                                        <div className='flex gap-3'>
                                                            <input
                                                                autoFocus={true}
                                                                value={search}
                                                                onChange={(e) => setSearch(e.target.value)}
                                                                type="text"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                                            <button
                                                                type="submit"
                                                                className='p-2 bg-red-600 hover:bg-red-500 text-white rounded-md'>
                                                                Search
                                                            </button>
                                                        </div>
                                                        </form>
                                                        Products
                                                        <form onSubmit={submitAmount}>
                                                            <select
                                                                onInput={getProducts}
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                                                                <option value="" disabled selected>Select Products</option>

                                                                {
                                                                    products.map((res, i) => {
                                                                        return <option key={i} value={Object.values(res)}>{res.description}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                                <button
                                                                    type="submit"
                                                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"

                                                                >
                                                                    Submit
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                    onClick={() => setOpen(false)}
                                                                    ref={cancelButtonRef}
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        </div>
    )
}
