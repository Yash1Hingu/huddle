import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useState } from 'react';
import RegisterDialog from '../components/RegisterDialog';
import LoginDialog from '../components/LoginDialog';

function WelcomePage() {

    // State to handle dialog visibility
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    // Functions to open and close the login dialog
    const handleOpenLogin = () => {
        setOpenLogin(true);
    };

    const handleOpenRegister = () => {
        setOpenRegister(true);
    }

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const handleCloseRegister = () => {
        setOpenRegister(false);
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute w-[500px] h-[500px] bg-primary rounded-full opacity-30 top-10 left-20 animate-ping"></div>
            <div className="absolute w-[300px] h-[300px] bg-success rounded-full opacity-30 bottom-10 right-20 animate-ping"></div>
            <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full opacity-30 top-1/2 left-1/3 animate-ping-slow"></div>

            {/* Welcome Text */}
            <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Welcome to Slack Clone
            </h1>
            <p className="text-3xl mb-8 text-white">
                Collaborate with your team and boost productivity!
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button className="text-lg bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded z-30" onClick={handleOpenLogin}>
                    Login
                </button>
                <button className="text-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded z-10" onClick={handleOpenRegister}>
                    Register
                </button>
            </div>

            {/* Login Dialog */}
            <LoginDialog
                openLogin={openLogin}
                handleCloseLogin={handleCloseLogin}
            />

            {/* Register Dialog */}
            <RegisterDialog
                openRegister={openRegister}
                handleCloseRegister={handleCloseRegister}
            />
        </div>
    )
}

export default WelcomePage
