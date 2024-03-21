import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import CashierEditModal from './cashier-edit-modal';
import CashierDeleteSection from './cashier-delete-section'
export default function CashierTableSection() {
    const myElementRefs = useRef([]);
    const { cart } = useSelector((state) => state.cashier);

    const [selectedRow, setSelectedRow] = useState(0);
    const [id, setId] = useState(0)

console.log('cart',cart)

    useEffect(() => {
        const myElement = myElementRefs.current[selectedRow];
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowUp' && selectedRow > 0) {
                setId(myElement?.id)
                setSelectedRow((prevRow) => prevRow - 1);
            } else if (event.key === 'ArrowDown' && selectedRow < cart.length - 1) {
                setId(myElement?.id)
                setSelectedRow((prevRow) => prevRow + 1);
            }
        };
        if (myElement?.id) {
            setId(myElement?.id)
        }
        window.addEventListener('keydown', handleKeyPress);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedRow, cart]);





    return (
        <section className="container mx-auto">
            <div className="flex flex-col ">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className=" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-auto h-[66.8vh] border border-gray-200  ">
                            <table className="min-w-full relative divide-y divide-gray-200 ">
                                <thead className="bg-red-500 sticky top-0 text-white ">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Item ID
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Description
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Price
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Total
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200  ">

                                    {
                                        cart.map((res, i) => {
                                            return <tr
                                                id={res.randomId}
                                                ref={(el) => (myElementRefs.current[i] = el)}
                                                className={`${selectedRow === i ? 'bg-gray-300' : ''}`}
                                                key={i}
                                            >
                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            {res.id}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <h2 className="font-medium text-gray-800 ">
                                                        {res.quantity}
                                                    </h2>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <h2 className="font-medium text-gray-800 ">
                                                        {res.product.description}
                                                    </h2>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            ₱ {res.price}
                                                        </h2>
                                                    </div>
                                                </td>

                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            ₱ {res.total}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className='flex gap-4'>
                                                        {/* {
                                                            res.registered == true && selectedRow == i ? <CashierEditModal
                                                                selectedRow={selectedRow}
                                                                index={i}
                                                                data={res} /> : <button
                                                                    className="font-medium text-gray-800  ">
                                                                <PencilIcon className='h-6 text-blue-500' />
                                                            </button>
                                                        } */}
                                                        <CashierEditModal
                                                            selectedRow={selectedRow}
                                                            index={i}
                                                            data={res} />

                                                        {/* {
                                                            selectedRow == i ? <CashierDeleteSection
                                                                selectedRow={selectedRow}
                                                                index={i}
                                                                data={res}
                                                            /> : <button
                                                                className="font-medium text-gray-800 ">
                                                                <TrashIcon className='h-6 text-red-500' />
                                                            </button>
                                                        } */}

                                                        <CashierDeleteSection
                                                            selectedRow={selectedRow}
                                                            index={i}
                                                            data={res}
                                                        />

                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
