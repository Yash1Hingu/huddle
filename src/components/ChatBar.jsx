import axios from "axios";
import Cookies from 'js-cookie';
import { Send } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment';
import ChatHeader from "./ChatHeader";

function ChatBar({ channelName }) {
    const { channelId } = useParams();
    const [messages, setMessages] = useState([]);
    const message = useRef(null);

    const getChats = () => {
        const token = Cookies.get('authToken');
        axios.get(`http://localhost:3000/api/channels/${channelId}/messages`, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                const chats = response.data;
                setMessages(chats);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    const handleSubmit = () => {
        const token = Cookies.get('authToken');
        const data = {
            message: message.current.value
        };

        axios.post(`http://localhost:3000/api/channels/${channelId}/messages`, data, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                message.current.value = '';
                getChats();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        getChats();

        const intervalId = setInterval(getChats, 3000);

        return () => clearInterval(intervalId); 
    }, [channelId])

    return (
        <div className="flex-1 relative bg-gray-200">
            {/* chat header */}
            <ChatHeader
                channelName={channelName}
                channelId={channelId}
            />
            {/* chat's */}
            <div className="p-4 h-[80vh] overflow-y-scroll scrollbar-thick pb-20">
                {/* chat message container */}
                {messages.map(message => <div className="flex items-start gap-2 mb-4" key={message.time}>
                    <div>
                        <Avatar
                            alt="User Profile"
                            src='https://via.placeholder.com/200'
                            sx={{ width: 45, height: 45, borderRadius: '8px', margin: '2px' }}
                        />
                    </div>
                    <div className="w-10/12">
                        <div className="flex gap-2">
                            <span className="font-bold">{message.sender.username}</span>
                            <span className="opacity-70">{moment(message.time).format('HH:mm')}</span>
                        </div>
                        <div>
                            {message.message}
                        </div>
                    </div>
                </div>)}

            </div>
            {/* chat bottom -- chat input */}
            <div className="absolute p-4 w-full bottom-0 ">
                <input
                    type="text"
                    className="w-full border-2 border-gray-500 rounded-md px-2 py-4 outline-none"
                    placeholder="Message #social-media"
                    ref={message}
                ></input>
                <button
                    className="absolute right-4 bottom-4 p-4 bg-[#1164A3] rounded-md rounded-l-none"
                    onClick={handleSubmit}
                >
                    <Send className="text-white" />
                </button>
            </div>
        </div>
    )
}

export default ChatBar
