import { useState } from "react";
import ChatBar from "../components/ChatBar";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";

function Dashboard() {
    const [channelName, setChannelName] = useState('');
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