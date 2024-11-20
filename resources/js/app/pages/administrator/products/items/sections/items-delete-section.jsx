import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import store from "@/store/store";
import {
    change_status_thunk,
    delete_items_thunk,
    delete_receives_thunk,
    get_items_thunk,
    get_receives_thunk,
} from "../../redux/products-thunk";
import { Delete } from "@mui/icons-material";

export default function AdministratorDeleteProduct({ data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = React.useState(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
    };

    async function received_item(params) {
        setLoading(true);
        try {
            await store.dispatch(delete_items_thunk(data.id));
            await store.dispatch(get_items_thunk());
            setLoading(false);
            setOpen(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div>
            <Button variant="contained" color="error" onClick={handleOpen}>
                <Delete />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Are you sure you want to cancel this item?
                    </Typography>
                    <Typography id="modal-modal-description" className="py-5">
                        Are you sure you want to delete your item? All of your
                        data will be permanently removed. This action cannot be
                        undone.
                    </Typography>
                    <div className="w-full flex items-end justify-end">
                        <Button
                            disabled={loading}
                            variant="contained"
                            onClick={received_item}
                        >
                            Confirm
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
