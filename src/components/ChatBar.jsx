import axios from "axios";
import Cookies from 'js-cookie';
import { Send } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment';
import ChatHeader from "./ChatHeader";
import Loader from "./Loader";

const colors = ['#FF5733', '#33FF57', '#3357FF', '#8E44AD', '#FF33FF', '#33FFD7', '#FF914D'];

function ChatBar({ channelName }) {
    const [currentDate, setCurrentDate] = useState('');
    const messageRefs = useRef([]);
    const { channelId } = useParams();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const message = useRef(null);
    const scrollRef = useRef(null);

    const getUsernameColor = (username) => {
        let sum = 0;
        for (let i = 0; i < username.length; i++) {
            sum += username.charCodeAt(i);
        }
        return colors[sum % colors.length];
    };

    const getChats = () => {
        const token = Cookies.get('authToken');
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/channels/${channelId}/messages`, {
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

        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


    const handleSubmit = () => {
        setLoading(true);
        const token = Cookies.get('authToken');
        const data = {
            message: message.current.value
        };

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/channels/${channelId}/messages`, data, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                message.current.value = '';
                getChats();
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const messageDate = entry.target.getAttribute('data-date');
                        setCurrentDate(messageDate);
                    }
                });
            },
            { threshold: 0.5 } // Adjust this threshold to detect when a message is fully in view
        );

        messageRefs.current.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });


        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        getChats();

        const intervalId = setInterval(getChats, 3000);

        return () => {
            clearInterval(intervalId);
            observer.disconnect();

        }
    }, [channelId])

    return (
        <div className="mt-12 md:mt-0 flex-1 relative bg-gray-200">
            {/* chat header */}
            <ChatHeader
                channelName={channelName}
                channelId={channelId}
            />
            {/* chat's */}
            <div className="relative">
                {/* Floating Date Header */}
                <div className="absolute top-4 left-0 right-0 w-fit z-20 m-auto bg-gray-200 text-center p-2 shadow-md rounded-xl">
                    {currentDate ? moment(currentDate).format('MMMM Do YYYY') : ''}
                </div>

                <div className="p-4 h-[80vh] overflow-y-scroll scrollbar-thick pb-20">
                    {/* chat message container */}
                    {messages?.messages?.map((message, index) => {
                        const messageDate = moment(message.createdAt).format('YYYY-MM-DD');
                        const prevMessageDate = index > 0 ? moment(messages.messages[index - 1].createdAt).format('YYYY-MM-DD') : null;
                        const userColor = getUsernameColor(message.sender.username);

                        return (
                            <div key={message.time} ref={el => messageRefs.current[index] = el} data-date={messageDate}>
                                {/* Show date header if it's the first message of the day or the date has changed */}
                                {messageDate !== prevMessageDate && (
                                    <div className="text-center text-gray-500 my-4">
                                        {moment(message.createdAt).format('MMMM Do YYYY')}
                                    </div>
                                )}

                                {/* Chat message */}
                                <div className={`flex gap-2 mb-4 ${messages.username === message.sender.username ? 'justify-end' : ''}`}>
                                    {/* Check if the message is sent by the logged-in user */}
                                    {messages.username !== message.sender.username && (
                                        <Avatar
                                            alt="User Profile"
                                            src='https://via.placeholder.com/200'
                                            sx={{ width: 45, height: 45, borderRadius: '8px', margin: '2px' }}
                                        />
                                    )}
                                    <div
                                        className={`p-3 rounded-lg ${messages.username === message.sender.username ? 'bg-primary bg-opacity-30' : 'bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex gap-2">
                                            <span className="font-bold"
                                                style={{ color: userColor }}
                                            >{message.sender.username}</span>
                                            <span className="opacity-70">{moment(message.createdAt).format('HH:mm')}</span>
                                        </div>
                                        <div>{message.message}</div>
                                    </div>
                                    {/* Display avatar on the right side if it's the logged-in user's message */}
                                    {messages.username === message.sender.username && (
                                        <Avatar
                                            alt="User Profile"
                                            src='https://via.placeholder.com/200'
                                            sx={{ width: 45, height: 45, borderRadius: '8px', margin: '2px' }}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    <div ref={scrollRef}></div>
                </div>
            </div>

            {/* chat bottom -- chat input */}
            <div className="absolute p-4 w-full bottom-0 ">
                <input
                    type="text"
                    className="w-full border-2 border-gray-500 rounded-md px-2 py-4 outline-none"
                    placeholder="Message #social-media"
                    ref={message}
                    required
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && message != '') {
                            if (!loading) {
                                handleSubmit();
                            }
                        }
                    }}
                ></input>
                {!loading &&
                    <button
                        className="absolute right-4 bottom-4 p-4 bg-[#1164A3] rounded-md rounded-l-none"
                        onClick={handleSubmit}
                    >
                        <Send className="text-white" />
                    </button>}
            </div>
        </div>
    )
}

export default ChatBar
