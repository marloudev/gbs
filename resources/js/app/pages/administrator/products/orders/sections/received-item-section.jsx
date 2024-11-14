import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import store from '@/store/store';
import { change_status_thunk, get_receives_thunk } from '../../redux/products-thunk';


export default function ReceivedItemSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = React.useState(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    async function received_item(params) {
        setLoading(true)
        try {
            await store.dispatch(change_status_thunk({
                ...data,
                status: 'Received'
            }))
            await store.dispatch(get_receives_thunk());
            setLoading(false)
            setOpen(false)
        } catch (error) {

            setLoading(false)
        }
    }
    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>Received Item</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to received this item?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Please confirm if you'd like to proceed with this item.
                    </Typography>
                    <div className='w-full flex items-end justify-end'>
                        <Button
                            disabled={loading}
                            variant='contained' onClick={received_item}>Confirm</Button>
                    </div>
                </Box>

            </Modal>
        </div>
    );
}
