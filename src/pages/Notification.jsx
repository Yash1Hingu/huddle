import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import nonotification from '../assets/images/no-alarm.gif';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Add } from '@mui/icons-material';

function Notification({ openNotification, handleCloseNotification }) {
    const [notification, setNotification] = useState([]);


    useEffect(() => {
        const token = Cookies.get('authToken');
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/notifications`, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                const notifications = response.data;
                setNotification(notifications);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [openNotification]);

    const handleJoinChannel = (link) => {
        const token = Cookies.get('authToken');
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api${link}/accept`, {}, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.error) {
                    alert(error.response.data.error); // Show the error message sent from the backend
                } else {
                    alert("An unknown error occurred");
                }
            });
        handleCloseNotification();
    }

    return (
        <Dialog
            open={openNotification}
            onClose={handleCloseNotification}
            PaperProps={{
                style: {
                    backgroundColor: '#1a1a1a', // Dark background
                    color: '#ffffff', // White text
                    borderRadius: '8px', // Rounded corners
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Subtle shadow
                    border: '1px solid rgba(255, 255, 255, 0.2)', // Light border for modern look
                }
            }}
        >
            <DialogContent style={{ paddingTop: '20px' }}>
                {notification.length !== 0 ? notification.map((n) => (
                    <div key={n._id}
                        className='flex bg-gray-900 p-4 rounded-lg justify-between items-center'
                    >
                        <h1>{n.message}</h1>
                        {!n.read && ( // Conditionally show the button if notification is unread
                            <Button
                                onClick={() => handleJoinChannel(n.link)}
                                style={{ color: '#4CAF50' }}
                            >
                                <Add />
                            </Button>
                        )}
                    </div>
                )) : <div className='flex flex-col items-center'>
                    <img
                        src={nonotification}
                        alt="No Notification"
                        className='mix-blend-multiply w-52'
                    />
                    <h5>No Notification.</h5>
                </div>}
            </DialogContent>
            <DialogActions style={{ padding: '16px' }}>
                <Button
                    onClick={handleCloseNotification}
                    style={{ color: '#999' }} // Cancel button style
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Notification
