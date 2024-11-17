import { Fragment, useEffect, useRef, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { changesCart, setIsPrint } from "../redux/cashier-slice";
import FormFieldInput from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/store";
import { edit_cart_item_thunk } from "../redux/cashier-thunk";
import { useHotkeys } from "react-hotkeys-hook";
import { Button, InputBase, Paper } from "@mui/material";

export default function CashierEditModal({ data, selectedRow, index }) {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    const { cart } = useSelector((state) => state.cashier);
    const [value, setValue] = useState(data.quantity);
    const [originalValue, setOriginalValue] = useState(data.quantity); // Track original value
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useHotkeys("f", () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus on the input field
        }
    });

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (selectedRow === index) {
                if (event.key === "E" || event.key === "e") {
                    setOpen(true);
                    setTimeout(() => {
                        inputRef.current.focus();
                    }, 300);
                }
            }
            if (event.key === "C" || event.key === "c") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [data.id]);

    function saveChanges(e) {
        e.preventDefault();
        store.dispatch(
            edit_cart_item_thunk({
                id: data.id,
                quantity: parseInt(value),
                total: parseInt(value) * data.price,
            }),
        );
        setOpen(false);
    }

    // Disable the Cancel button if there are no changes
    function isSubmit() {
        return value === originalValue;
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="font-medium  text-white"
            >
                <PencilIcon className="h-6 text-blue-500" />
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-300 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div
                                        onSubmit={saveChanges}
                                        className="bg-gray-300 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                                    >
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            {data.product.description}
                                            <Dialog.Title
                                                as="h3"
                                                className="text-base font-semibold leading-6 text-gray-900"
                                            >
                                                Edit Quantity
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <div className="relative overflow-x-auto">
                                                    <div className="m-3 my-2">
                                                        <Paper
                                                            component="form"
                                                            sx={{
                                                                p: "2px 4px",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <InputBase
                                                                className="w-full"
                                                                inputRef={
                                                                    inputRef
                                                                }
                                                                autoFocus={true}
                                                                onChange={(e) =>
                                                                    setValue(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                                value={value}
                                                                name="quantity"
                                                                type="number"
                                                                label="Quantity"
                                                                inputProps={{
                                                                    "aria-label":
                                                                        "quantity",
                                                                }}
                                                            />
                                                        </Paper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-300 px-3 py-3 sm:flex sm:flex-row-reverse gap-4">
                                            <Button
                                                disabled={isSubmit()}
                                                onSubmit={saveChanges}
                                                variant="contained"
                                            >
                                                Confirm Payment
                                            </Button>
                                            <Button
                                                color="error"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                                variant="outlined"
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
