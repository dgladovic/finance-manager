/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable arrow-body-style */

import { useState, useRef, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import { Dialog, DialogContent, TextField, Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import ReadQrCamera from './qr-mobile-scanner';

const ReadQrMobile = ({ sendQrData }) => {

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(false);
    const [message, setMessage] = useState('');

    const messageRef = useRef();

    useEffect(() => {
        handleOpen();
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOptions(true);
    };

    const sendQrDataNew = (message) => {
        handleClose();
        sendQrData(message.data);
    }

    const handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        const qrObject = {
            'data': message
        }
        sendQrDataNew(qrObject);
        };

    return (
        <div style={{ margin: "auto" }}>
            <Dialog open={open} onClose={handleClose}>
                <ReadQrCamera sendQrData={sendQrDataNew} />
            </Dialog>
            {
                options === true ?
                    <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
                        <h3>Well, this is awkward.</h3>
                        <p>The QR Code must be dirty, you can try scanning with your phones camera. If the code is detected, try copying the receipt link into this field.</p>
                        <Stack spacing={3} style={{ zIndex: 1000 }} >
                            <form onSubmit={handleSubmit} id="myForm" style={{ zIndex: 1000 }}>
                                <TextField fullWidth
                                    name="message"
                                    label="Receipt URL"
                                    ref={messageRef}
                                    value={message}
                                    onFocus={() => messageRef.current.focus()}
                                    onChange={(e) => setMessage(e.target.value)}
                                    style={{ zIndex: 1000 }}
                                    required
                                />
                            </form>
                            <LoadingButton fullWidth size="large" type="submit" variant="contained" form="myForm">
                                Analyze Receipt
                            </LoadingButton>
                        </Stack>
                    </div>
                    :
                    ' '
            }
            {/* <button type="button"
                style={{ margin: 'auto', display: 'block', backgroundColor: 'rgb(0,140,120)', color: 'white', border: 'solid rgb(0,175,120) 5px', borderRadius: '50%', width: '150px', height: '150px' }}
                onClick={handleOpen}>
                Scan QR Code With Mobile
            </button> */}
        </div >

    );
};

export default ReadQrMobile;