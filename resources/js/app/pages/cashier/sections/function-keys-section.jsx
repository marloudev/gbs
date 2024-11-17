import React, { useEffect, useRef } from "react";
import CashierLogoutSection from "./cashier-logout-section";
import CashierDiscountModal from "./cashier-discount-modal";
import CashierAmountSection from "../../search/sections/search-section";
import { Link, router } from "@inertiajs/react";
import { Button } from "@mui/material";
export default function FunctionKeysSection() {

    const inputRef = useRef(null);
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "I" || event.key === "i") {
                router.visit("/cashier/search");
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    
    return (
        <div className="grid grid-cols-4 gap-4 h-full p-4 border-t">
            <Button
                variant="contained"
                className="flex flex-col items-center justify-center bg-red-500"
            >
                <h1 className="text-white text-5xl leading-tight font-black">
                    P
                </h1>
                <div className="text-white">PAY</div>
            </Button>

            <Button
                variant="contained"
                className="flex flex-col items-center justify-center bg-red-500"
            >
                <h1 className="text-white text-5xl leading-tight font-black">
                    F
                </h1>
                <div className="text-white">FOCUS</div>
            </Button>
            {/* <CashierAmountSection /> */}
            <Button
                variant="contained"
                className="flex flex-col items-center justify-center bg-red-500"
            >
                <Link
                    href="/cashier/search"
                >
                    <h1 className="text-white text-5xl leading-tight font-black">
                        I
                    </h1>
                    <div className="text-white">ITEM</div>
                </Link>
            </Button>

            <CashierDiscountModal inputRef={inputRef} />

            <Button
                variant="contained"
                className="flex flex-col items-center justify-center bg-red-500"
            >
                <h1 className="text-white text-5xl leading-tight font-black">
                    E
                </h1>
                <div className="text-white">EDIT</div>
            </Button>

            <Button
                variant="contained"
                className="flex flex-col items-center justify-center bg-red-500"
            >
                <h1 className="text-white text-5xl leading-tight font-black">
                    C
                </h1>
                <div className="text-white">CANCEL</div>
            </Button>
            <Button
                variant="contained"
                className="flex flex-col items-center justify-center bg-red-500"
            >
                <h1 className="text-white text-5xl leading-tight font-black">
                    V
                </h1>
                <div className="text-white">VOID</div>
            </Button>

            <CashierLogoutSection />
        </div>
    );
}
