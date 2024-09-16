import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';

function AddChannel({ openAddChannel, handleCloseChannelBox }) {

    const [channel, setChannel] = useState({
        channelName: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setChannel((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        const token = Cookies.get('authToken');
        axios.post('http://localhost:3000/api/channel/create', channel, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        }).then((response) => {
            handleCloseChannelBox();
        }).catch(error => {
            alert("Try again");
        })
    }

    return (
        <Dialog open={openAddChannel} onClose={handleCloseChannelBox} PaperProps={{
            style: {
                backgroundColor: '#1a1a1a', // Dark background
                color: '#ffffff', // White text
                borderRadius: '8px', // Rounded corners
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Subtle shadow
                border: '1px solid rgba(255, 255, 255, 0.2)', // Light border for modern look
            }
        }}>
            <DialogTitle style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
                New Channel
            </DialogTitle>
            <DialogContent style={{ paddingTop: '20px' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="channel name"
                    type="text"
                    fullWidth
                    variant="filled"
                    value={channel.channelName}
                    name='channelName'
                    onChange={handleChange}
                    InputProps={{
                        style: {
                            backgroundColor: '#333', // Input background
                            color: '#fff', // Text color
                        },
                    }}
                    InputLabelProps={{
                        style: { color: '#aaa' }, // Label color
                    }}
                />
            </DialogContent>
            <DialogActions style={{ padding: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Button onClick={handleCloseChannelBox} style={{ color: '#999' }}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} style={{
                    backgroundColor: '#4a90e2', // Slack-like blue
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                }}
                >
                    add new channel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddChannel
