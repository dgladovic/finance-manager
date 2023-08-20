/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
/* eslint-disable no-const-assign */
/* eslint-disable no-var */
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext, { useAuth } from '../../context/AuthProvider';
import ReadQrDesktop from '../qr-scanner';
import Receipt from '../receipt/receipt';
import ReadQrMobile from '../qr-mobile-scanner-fullscreen';

export default function RecitExtractor() {

    const { auth } = useAuth();

    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }

    const [mobile, setMobile] = useState([false]);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMsg, setError] = useState(false);

    const [message, setMessage] = useState([]);
    const [isFetching, setFetching] = useState([false]);

    useEffect(() => {
        setMobile(detectMob());
    }, []);


    const handleOpenErrorModal = () => {
        setShowErrorModal(true);
    };

    const handleCloseErrorModal = () => {
        setShowErrorModal(false);
    };

    const SaveButton = {
        width: '48%',
        height: '50px',
        border: 'solid rgb(0,175,120) 2px',
        borderRadius: '10px',
        background: 'rgb(0,175,120)',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
    };

    const CancelButton = {
        width: '48%',
        height: '50px',
        border: 'solid rgb(0,175,120) 2px',
        borderRadius: '10px',
        background: 'white',
        color: 'rgb(0,175,120)',
        fontWeight: 'bold',
        fontSize: '14px'
    };

    const liveUrl = process.env.REACT_APP_BACKEND_URL;

    const parseUrl = `${liveUrl}/scan/=?`;

    const userId = auth.id;

    const getReceiptData = (message) => {
        axios.get(parseUrl + message).then(
            (e) => {
                console.log(parseUrl + message, 'Parsed receipt successfully!');
                setMessage(e);
                setFetching(true);
            }
        ).catch((error) => {
            if (error.response && error.response.status === 500) {
                setError(error);
                handleOpenErrorModal();
            }
        });;
    };

    const saveReceipt = (message) => {
        const payload = { ...message.data, userId: userId };
        console.log(payload);
        axios.post(`${liveUrl}/scan/save`, payload).then(
            (e) => {
                console.log('Saved successfully!');
                setFetching(false);
            }
        ).catch((error) => {
            if (error.response && error.response.status === 400) {
                console.log(error);
                setError(error);
                handleOpenErrorModal();
            }
        });
    }

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {
                isFetching !== true && !mobile ? <ReadQrDesktop sendQrData={getReceiptData} /> : ''
            }
            {
                isFetching !== true && mobile ? <ReadQrMobile sendQrData={getReceiptData} /> : ''
            }
            {
                isFetching === true ?
                    <div>
                        <Receipt amo={message.data} />
                        <div style={{ margin: 'auto', marginTop: '10px', width: '397px', display: 'flex', justifyContent: 'space-between' }}>
                            <button style={SaveButton} type='button' onClick={() => saveReceipt(message)}>SAVE</button>
                            <button style={CancelButton} type='button' onClick={() => setFetching(false)}>CANCEL</button>
                        </div>
                    </div> : ''
            }
            <Dialog open={showErrorModal} onClose={handleCloseErrorModal}>
                <DialogTitle sx={{color:'red'}}>Error</DialogTitle>
                <DialogContent>
                    <p>{errorMsg.response.data.error}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseErrorModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}