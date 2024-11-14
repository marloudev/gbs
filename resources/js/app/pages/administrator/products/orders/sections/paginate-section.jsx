import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { router } from "@inertiajs/react";

export default function PaginateSection() {
    const { receives } = useSelector((state) => state.products);
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    console.log('page',page)
    return (
        <div className="py-5 flex items-center justify-end">
            <Stack spacing={2}>
                <Pagination
                defaultPage={parseInt(page)}
                  onChange={(e,page)=>router.visit('?page='+page)}
                    count={receives?.last_page ?? 0}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>
        </div>
    );
}
