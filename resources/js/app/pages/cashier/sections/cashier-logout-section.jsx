import React, { useEffect } from "react";
import { logout_account_service } from "../../../../services/account-service";
import { router } from "@inertiajs/react";
import { Button } from "@mui/material";

export default function CashierLogoutSection() {
    useEffect(() => {
        const handleKeyPress = (event) => {
            const isEscapeKey = event.key.toLowerCase() === "escape";
            if (isEscapeKey) {
                logoutAccount();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    async function logoutAccount() {
        try {
            await logout_account_service();
            router.visit("/");
        } catch (error) {}
    }
    return (
        <Button
            variant="contained"
            className="flex flex-col items-center justify-center bg-red-500"
        >
            <h1 className="text-white text-5xl leading-tight font-black">
                ESC
            </h1>
            <div className="text-white">LOGOUT</div>
        </Button>
    );
}
