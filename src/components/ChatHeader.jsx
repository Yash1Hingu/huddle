import { PersonAdd } from "@mui/icons-material"
import { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from "@mui/material";

function ChatHeader({ channelName, channelId }) {
    const [openJoin, setOpenJoin] = useState(false);
    const [users, setUsers] = useState([]);

    function handleCloseJoin() {
        setOpenJoin(false);
    }

    function handleOpenJoin() {
        setOpenJoin(true);

        const token = Cookies.get('authToken');
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/channel/${channelId}/users`, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function handleJoinRequest(userId){
        const token = Cookies.get('authToken');
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/channels/${channelId}/join`,
            {
                "recipientUserId": userId
            }
            ,{
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="flex w-full p-4 border-b-2 border-gray-300 items-center justify-between relative">
            <h2 className="font-bold text-xl"># {channelName}</h2>
            <button
                className={`bg-primary p-2 rounded-full relative ${openJoin ? 'rounded-b-none' : ''}`}
                onClick={openJoin ? handleCloseJoin : handleOpenJoin}

            >
                <PersonAdd
                    sx={{ width: 25, height: 25 }}
                    className="text-white rounded-full"
                />
                {openJoin && (
                    <div className="absolute z-30 bg-gray-800 text-white mt-2 min-w-[300px] right-0 text-left p-4 rounded-b-xl rounded-l-xl">
                        {users.map((user) => <div className="flex justify-between items-center">
                            <p className="p-2 mb-2 hover:bg-gray-700">{user.username}</p>
                            <Button onClick={() => handleJoinRequest(user._id)}>
                                Join
                            </Button>
                        </div>)}
                    </div>
                )}
            </button>
        </div>
    )
}

export default ChatHeader
