import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

function RegisterDialog({ openRegister, handleCloseRegister }) {
    return (
        <Dialog open={openRegister} onClose={handleCloseRegister} PaperProps={{
            style: {
                backgroundColor: '#1a1a1a', // Dark background
                color: '#ffffff', // White text
                borderRadius: '8px', // Rounded corners
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Subtle shadow
                border: '1px solid rgba(255, 255, 255, 0.2)', // Light border for modern look
            }
        }}>
            <DialogTitle style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
                Register
            </DialogTitle>
            <DialogContent style={{ paddingTop: '20px' }}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    variant="filled"
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
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="filled"
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
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    variant="filled"
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
                <Button onClick={handleCloseRegister} style={{ color: '#999' }}>
                    Cancel
                </Button>
                <Button onClick={handleCloseRegister} style={{
                    backgroundColor: '#4a90e2', // Slack-like blue
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                }}>
                    Register
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default RegisterDialog;
