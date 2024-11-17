import React, { useEffect, useRef } from "react";
import CashierTableSection from "./sections/cashier-table-section";
import CashierSubTotalSection from "./sections/cashier-sub-total-section";
import CashierScannerSection from "./sections/cashier-scanner-section";
import CashierModalItemSection from "./sections/cashier-modal-item-section";
import CashierPayModalSection from "./sections/cashier-pay-modal-section";
import CashierPrintDataComponent from "./components/cashier-print-data-component";
import { useDispatch, useSelector } from "react-redux";
import { changesCart } from "./redux/cashier-slice";
import FunctionKeysSection from "./sections/function-keys-section";
import CashierLayout from "@/app/layouts/cashier-layout";
import { setUser } from "@/app/redux/app-slice";
import store from "@/store/store";
import { get_cart_thunk } from "./redux/cashier-thunk";
import { router } from "@inertiajs/react";
import { Button } from "@mui/material";

export default function CashierPage({ auth }) {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cashier);

    useEffect(() => {
        dispatch(setUser(auth.user));
        if (auth.user.role == "admin") {
            router.visit("/administrator/dashboard");
        }
        store.dispatch(get_cart_thunk());
    }, []);

    return (
        <CashierLayout>
            <div className="flex-1 basis-7/12 h-screen ">
                <div className="flex flex-col h-full w-full ">
                    <div className="flex-1 basis-4/6 border-1 overflow-auto">
                        <CashierTableSection />
                        {/* <CashierModalItemSection /> */}
                    </div>
                    <div className="flex-1 w-full flex h-full  basis-2/6 border-1">
                        <div className="flex-1 flex my-4 ml-4">
                            <Button variant="contained" className="w-full">
                                <div className="flex items-center justify-center font-black text-white text-center text-7xl">
                                    GBS Minimart
                                </div>
                                {/* <div className='flex-1 '>
                        <CashierSubTotalSection />
                        </div> */}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col basis-5/12 border-1">
                <div className="flex-1 flex flex-col basis-4/6 border-1">
                    <div className="flex-none">
                        <CashierScannerSection />
                    </div>
                    <div className="flex-1">
                        <CashierSubTotalSection />
                    </div>
                    <div className="flex-none  mx-4">
                        <CashierPayModalSection />
                    </div>
                </div>
                <div className="flex-1 basis-2/6  border-1">
                    <FunctionKeysSection />
                </div>
            </div>
            <div className="hidden">
                <CashierPrintDataComponent />
            </div>
            {/* <CashierTableSection /> */}
        </CashierLayout>
    );
}
