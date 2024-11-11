import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function AdministratorShowSalesItemSection({ data, id }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Show Receipt
            </Button>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box className="h-screen w-96 " role="presentation">
                    <form className=" flex flex-col w-full mt-20 px-3">
                        <div className="flex-none">
                            <div className="text-2xl font-bold">
                                Invoice GB-{id}
                            </div>
                        </div>
                        <div className="flex-1">
                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside  ">
                                <li>Subtotal: {data.subtotal}</li>

                                <li>Total: {data.total}</li>
                            </ul>
                            <ul
                                role="list"
                                className="divide-y divide-gray-100 p-0"
                            >
                                {data?.sales_item?.map((res, i) => {
                                    return (
                                        <li
                                            key={i}
                                            className="flex justify-between gap-x-6 "
                                        >
                                            <div className="flex min-w-0 gap-x-4">
                                                <div className="min-w-0 flex-auto ">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                                        {
                                                            res.product
                                                                .description
                                                        }
                                                    </p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                        Barcode:{" "}
                                                        {res.product.barcode}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">
                                                    Quantity {res.quantity}
                                                </p>
                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                    <p className="text-xs leading-5 text-gray-500">
                                                        Price: {res.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </form>
                </Box>
            </Drawer>
        </div>
    );
}
