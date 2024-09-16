import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginDialog({ openLogin, handleCloseLogin }) {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/user/login', user).then((response) => {
            Cookies.set('authToken', response.data.token, { expires: 7 });
            navigate('/dashboard/0');
        }).catch(error => {
            alert("Try again");
        })
    }


    return (
        <Dialog open={openLogin} onClose={handleCloseLogin} PaperProps={{
            style: {
                backgroundColor: '#1a1a1a', // Dark background
                color: '#ffffff', // White text
                borderRadius: '8px', // Rounded corners
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Subtle shadow
                border: '1px solid rgba(255, 255, 255, 0.2)', // Light border for modern look
            }
        }}>
            <DialogTitle style={{ paddingBottom: '10px', textAlign: 'center', fontSize: '2rem' }}>
                Login
            </DialogTitle>
            <DialogContent style={{ paddingTop: '20px' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="filled"
                    value={user.email}
                    name='email'
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
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="filled"
                    value={user.password}
                    name='password'
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
            <DialogActions style={{ padding: '16px' }}>
                <Button onClick={handleCloseLogin} style={{ color: '#999' }}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} style={{
                    backgroundColor: '#4a90e2', // Slack-like blue
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                }}>
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog
