import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { router } from "@inertiajs/react";

export default function PaginateSection() {
    const { sales } = useSelector((state) => state.sales);
    const url = window.location.href;
    const parsedUrl = new URL(url);
    const page = parsedUrl.searchParams.get("page");
    return (
        <div className="py-5 flex items-center justify-end">
            <Stack spacing={2}>
                <Pagination
                defaultPage={parseInt(page)}
                  onChange={(e,page)=>router.visit('?page='+page)}
                    count={sales?.last_page ?? 0}
                    variant="outlined"
                    shape="rounded"
                />
            </Stack>
        </div>
    );
}
