import { useEffect, useRef, useState } from "react";
import ChatBar from "../components/ChatBar";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
    const [channelName, setChannelName] = useState('');
    const [username,setUsername] = useState(null);

    const navigate = useNavigate(null);

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (!token) {
            navigate('/');
            return;
        }

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                const data = response.data.username;
                setUsername(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    return (<div className="w-screen relative">
        {/* SEARCH BAR */}
        <SearchBar
            isOnline={true}
            usernameProp={username}
        />
        <div className="flex relative">
            {/* Slidebar */}
            <SideBar
                setChannelName={setChannelName}
                usernameProp={username}
            />
            {/* Chat Arear */}
            <ChatBar
                channelName={channelName}
            />
        </div>
    </div>)
}

export default Dashboard;