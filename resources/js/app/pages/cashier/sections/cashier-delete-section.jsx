import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import store from "@/store/store";
import { delete_cart_item_thunk } from "../redux/cashier-thunk";

export default function CashierDeleteSection({ data, selectedRow, index }) {
    const dispatch = useDispatch();

    function deleteCartById(id) {
        store.dispatch(delete_cart_item_thunk(id))
    }


    useEffect(() => {
        const handleKeyPress = (event) => {
            if ((event.key === 'V' || event.key === 'v')) {
                deleteCartById(parseInt(data.id))
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [data.id]);

    return (
        <div>
            <button
                onClick={() => deleteCartById(data.id)}
                className="font-medium text-gray-800 ">
                <TrashIcon className='h-6 text-red-500' />
            </button>
        </div>
    );
}
