import ChatBar from "../components/ChatBar";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";

function Dashboard() {
    return (<div className="w-screen relative">
        {/* SEARCH BAR */}
        <SearchBar
            isOnline={true}
        />
        <div className="flex relative">
            {/* Slidebar */}
            <SideBar />
            {/* Chat Arear */}
            <ChatBar />
        </div>
    </div>)
}

export default Dashboard;