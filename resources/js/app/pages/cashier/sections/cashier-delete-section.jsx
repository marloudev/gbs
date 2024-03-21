import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { changesCart } from '../redux/cashier-slice';

export default function CashierDeleteSection({ data, selectedRow, index }) {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cashier);
    function deleteCartById(randomId) {
        const newCart = cart.filter(obj => obj.randomId !== randomId);
        dispatch(changesCart(newCart));
    }


    // useEffect(() => {
    //     const handleKeyPress = (event) => {
    //         if ((event.key === 'V' || event.key === 'v')) {
    //             deleteCartById(parseInt(data.randomId))
    //         }
    //     };

    //     window.addEventListener("keydown", handleKeyPress);
    //     return () => {
    //         window.removeEventListener("keydown", handleKeyPress);
    //     };
    // }, [data.randomId]);

    return (
        <div>
            <button
                onClick={() => deleteCartById(data.randomId)}
                className="font-medium text-gray-800 ">
                <TrashIcon className='h-6 text-red-500' />
            </button>
        </div>
    );
}
