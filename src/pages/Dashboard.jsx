import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";

function Dashboard() {
    return (<div className="w-screen">
        {/* SEARCH BAR */}
        <SearchBar
            isOnline={true}
        />
        <div>
            {/* Slidebar */}
            <SideBar />
            {/* Chat Arear */}
        </div>
    </div>)
}

export default Dashboard;