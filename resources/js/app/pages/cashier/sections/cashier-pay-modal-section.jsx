import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { changeTenders, setIsPrint } from "../redux/cashier-slice";
import store from "../../../../store/store";
import { createPaymentThunk } from "../redux/cashier-thunk";
import { Box, Button, Modal, Typography } from "@mui/material";

export default function CashierPayModalSection() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);
    const { payment, cart } = useSelector((state) => state.cashier);
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.app);
    const cancelButtonRef = useRef(null);
    const dispatch = useDispatch();
    const [autoFocus, setAutoFucos] = useState(true);

    async function acceptPayment(e) {
        e.preventDefault();
        setLoading(true);
        try {
            if (!isSubmit()) {
                await store.dispatch(createPaymentThunk());
                await setOpen(false);
                setTimeout(() => {
                    document.body.focus();
                    inputRef.current.focus();
                }, 1000);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if ((event.key === "F" || event.key === "f") && autoFocus) {
                // If 'F' key is pressed and autofocus prop is true
                setAutoFucos(true);
                inputRef.current.focus();
            } else if (event.key === "C" || event.key === "c") {
                // If 'F' key is pressed and autofocus prop is true
                setOpen(false);
            } else if (event.key === "P" || event.key === "p") {
                // If 'F' key is pressed and autofocus prop is true
                if (cart.length != 0 || cart.length != "0") {
                    setOpen(true);
                }
                setTimeout(() => {
                    setAutoFucos(true);
                    document.getElementById("paymentDetails").focus();
                }, 500);
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [autoFocus, cart.length]);

    function isSubmit() {
        if (payment.tenders < 0) {
            return true;
        } else if (payment.tenders <= 0) {
            return true;
        } else if (payment.change < 0) {
            return true;
        } else if (payment.total == 0) {
            return true;
        }
        return false;
    }
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "background.paper",
        boxShadow: 24,
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button
                size="large"
                className="w-full"
                onClick={() => handleOpen(true)}
                variant="contained"
            >
                <div className="py-1">PAY</div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form
                        onSubmit={acceptPayment}
                        className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                    >
                        <div className="">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <div
                                    as="h3"
                                    className="text-base font-semibold leading-6 text-gray-900"
                                >
                                    Payment Details
                                </div>
                                <div className="mt-2">
                                    <div className="relative overflow-x-auto">
                                        <table className="w-full text-sm  ">
                                            <tbody>
                                                <tr className="bg-white border-b ">
                                                    <th
                                                        scope="row"
                                                        className=" py-2 font-medium text-4xl text-gray-900"
                                                    >
                                                        Subtotal:
                                                    </th>
                                                    <td className="px-6 py-2 font-bold text-4xl text-gray-900">
                                                        ₱ {payment.subtotal}
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b ">
                                                    <th
                                                        scope="row"
                                                        className=" py-2 font-medium text-4xl text-gray-900"
                                                    >
                                                        Discount:
                                                    </th>
                                                    <td className="px-6 py-2 font-bold text-4xl text-gray-900">
                                                        {parseFloat(
                                                            payment.discount,
                                                        ) * 100}
                                                        %
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b ">
                                                    <th
                                                        scope="row"
                                                        className=" py-2 font-medium text-4xl text-gray-900"
                                                    >
                                                        Tax:
                                                    </th>
                                                    <td className="px-6 py-2 font-bold text-4xl text-gray-900">
                                                        ₱ {payment.tax}
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b ">
                                                    <th
                                                        scope="row"
                                                        className=" py-2 font-medium text-4xl text-gray-900"
                                                    >
                                                        Total:
                                                    </th>
                                                    <td className="px-6 py-2 font-bold text-4xl text-gray-900">
                                                        ₱ {payment.total}
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b ">
                                                    <th
                                                        scope="row"
                                                        className=" py-2 font-medium text-4xl text-gray-900"
                                                    >
                                                        Tenders:
                                                    </th>
                                                    <td className="px-6 py-2 font-bold text-4xl text-gray-900">
                                                        <input
                                                            autoFocus={
                                                                autoFocus
                                                            }
                                                            value={
                                                                payment.tenders ==
                                                                0
                                                                    ? ""
                                                                    : payment.tenders
                                                            }
                                                            onChange={(e) =>
                                                                dispatch(
                                                                    changeTenders(
                                                                        {
                                                                            value: e
                                                                                .target
                                                                                .value,
                                                                            cashier_id:
                                                                                user.id,
                                                                        },
                                                                    ),
                                                                )
                                                            }
                                                            type="text"
                                                            id="paymentDetails"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b ">
                                                    <th
                                                        scope="row"
                                                        className=" py-2 font-medium text-4xl text-gray-900"
                                                    >
                                                        Change:
                                                    </th>
                                                    <td className="px-6 py-2 font-bold text-4xl text-gray-900">
                                                        ₱ {payment.change}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="bg-gray-50 gap-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <Button
                            disabled={isSubmit() || loading}
                            onClick={acceptPayment}
                            variant="contained"
                        >
                            Confirm Payment
                        </Button>
                        {/* <button
                      disabled={isSubmit()}
                      type="submit"
                      className={`inline-flex w-full justify-center rounded-md ${isSubmit() ? 'bg-red-300' : 'bg-red-600 hover:bg-red-500'}  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`}
                      onClick={acceptPayment}
                    >
                      Confirm Payment
                    </button> */}
                        <Button
                            type="button"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                        >
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
