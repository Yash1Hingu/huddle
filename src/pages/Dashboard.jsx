import { useEffect, useState } from "react";
import ChatBar from "../components/ChatBar";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [channelName, setChannelName] = useState('');
    const navigate = useNavigate(null);

    useEffect(() => {
        const token = Cookies.get('authToken');
        if(!token) {
            navigate('/');
            return;
        }
    },[])

    return (<div className="w-screen relative">
        {/* SEARCH BAR */}
        <SearchBar
            isOnline={true}
        />
        <div className="flex relative">
            {/* Slidebar */}
            <SideBar 
                setChannelName={setChannelName}
            />
            {/* Chat Arear */}
            <ChatBar 
                channelName={channelName}
            />
        </div>
    </div>)
}

export default Dashboard;