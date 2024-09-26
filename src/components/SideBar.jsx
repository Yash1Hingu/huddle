// import { useEffect, useRef, useState } from "react";
// import { AddOutlined, CreateOutlined, Notifications } from "@mui/icons-material"
// import { Avatar } from "@mui/material";
// import axios from "axios";
// import Cookies from 'js-cookie';
// import AddChannel from "./AddChannel";
// import { useNavigate, useParams } from "react-router-dom";
// import Notification from "../pages/Notification";


// function SideBar({ setChannelName }) {

//     const [channels, setChannels] = useState([]);
//     const [openAddChannel, setOpenAddChannel] = useState(false);
//     const [openNotification, setOpenNotification] = useState(false);
//     const navigate = useNavigate();
//     const { channelId } = useParams();

//     const handleActiveChannel = (e) => {
//         setChannelName(e.target.name);
//         navigate(`/dashboard/${e.target.id}`)
//     }

//     const handleOpenAddChannel = () => {
//         setOpenAddChannel(true);
//     }

//     const handleCloseChannelBox = () => {
//         getChannels();
//         setOpenAddChannel(false);
//     }

//     const handleOpenNotification = () => {
//         setOpenNotification(true);
//     }

//     const handleCloseNotification = () => {
//         getChannels();
//         setOpenNotification(false);
//     }

//     const getChannels = () => {
//         const token = Cookies.get('authToken');
//         axios.get('${import.meta.env.VITE_BACKEND_URL}/api/channels', {
//             headers: {
//                 Authorization: `Bearer ${token}`  // Adding the token to the headers
//             }
//         })
//             .then(response => {
//                 const channels = response.data.channels;
//                 setChannels(channels);
//                 setChannelName(channels[0].channelName)
//                 navigate(`/dashboard/${channels.length > 0 ? channels[0]._id : '0'}`)
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     }

//     useEffect(() => {
//         getChannels();
//     }, [openNotification])


//     return (
//         <>
//             <div className="bg-primary h-[93vh] flex text-white border-t-2 border-gray-500 border-opacity-30 max-w-[360px]">
//                 <div className="border-r-2 border-gray-500 border-opacity-30 px-2 py-4 flex flex-col gap-4 items-center">
//                     {/* <button className="border-4 border-white rounded-xl">
//                         <Avatar
//                             alt="User Profile"
//                             src='https://via.placeholder.com/150'
//                             sx={{ width: 35, height: 35, borderRadius: '8px', margin: '2px' }}
//                         />
//                     </button>
//                     <button className="">
//                         <Avatar
//                             alt="User Profile"
//                             src='https://via.placeholder.com/150'
//                             sx={{ width: 35, height: 35, borderRadius: '8px', margin: '2px' }}
//                         />
//                     </button>
//                     <button className="mt-4">
//                         <AddOutlined />
//                     </button> */}
//                     <button className="mt-4" onClick={handleOpenNotification}>
//                         <Notifications />
//                     </button>
//                 </div>
//                 <div className="w-full">
//                     {/* sidebar header */}
//                     <div className="flex justify-between items-center p-4 gap-2">
//                         <h2 className="font-bold text-xl">Channels</h2>
//                         <button className="cursor-pointer" onClick={handleOpenAddChannel}>
//                             <CreateOutlined className="text-primary bg-white p-2 rounded-full" fontSize="large" />
//                         </button>
//                     </div>
//                     <hr className="border-gray-500 border-opacity-30" />
//                     {/* sidebar body */}
//                     <div>
//                         {channels.map((channel) => (
//                             <button className={`w-full text-left py-2 px-4 font-bold opacity-80 hover:bg-[#1164A3] hover:bg-opacity-100 cursor-pointer hover:font-black ${channel._id === channelId ? ' bg-[#1164A3]' : ''}`}
//                                 id={channel._id}
//                                 key={channel._id}
//                                 onClick={handleActiveChannel}
//                                 name={channel.channelName}
//                             >
//                                 # &nbsp; {channel.channelName}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <AddChannel
//                 openAddChannel={openAddChannel}
//                 handleCloseChannelBox={handleCloseChannelBox}
//             />

//             <Notification
//                 openNotification={openNotification}
//                 handleCloseNotification={handleCloseNotification}
//             />
//         </>
//     )
// }

// export default SideBar



import { useEffect, useState } from "react";
import { AddOutlined, CreateOutlined, Notifications, Menu, Close } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import AddChannel from "./AddChannel";
import Notification from "../pages/Notification";
import { useNavigate, useParams } from "react-router-dom";

function SideBar({ setChannelName }) {
    const [channels, setChannels] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For toggling sidebar
    const [openAddChannel, setOpenAddChannel] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const navigate = useNavigate();
    const { channelId } = useParams();

    // Toggles the sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleActiveChannel = (e) => {
        setChannelName(e.target.name);
        navigate(`/dashboard/${e.target.id}`);
        setIsSidebarOpen(false); // Close sidebar after selecting channel on mobile
    };

    const handleOpenAddChannel = () => {
        setOpenAddChannel(true);
    };

    const handleCloseChannelBox = () => {
        getChannels();
        setOpenAddChannel(false);
    };

    const handleOpenNotification = () => {
        setOpenNotification(true);
    };

    const handleCloseNotification = () => {
        getChannels();
        setOpenNotification(false);
    };

    const getChannels = () => {
        const token = Cookies.get("authToken");
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/channels`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Adding the token to the headers
                },
            })
            .then((response) => {
                const channels = response.data.channels;
                setChannels(channels);
                setChannelName(channels[0].channelName);
                navigate(`/dashboard/${channels.length > 0 ? channels[0]._id : "0"}`);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        getChannels();
    }, [openNotification]);

    return (
        <>
            {/* Hamburger menu button for mobile */}
            <button className="absolute top-0 z-20 md:hidden p-2 bg-primary w-full text-left" onClick={toggleSidebar}>
                <Menu className="text-white" />
            </button>



            {/* Sidebar with sliding animation */}
            <div
                className={`fixed top-0 left-0 w-64 bg-primary h-screen md:h-[90vh] z-50 transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:relative md:translate-x-0 md:w-[360px]`}
            >
                {/* Button to open Add Channel */}
                <div className="p-4 flex justify-between items-center">
                    <button className="bg-white text-primary p-2 rounded-full mt-4" onClick={handleOpenNotification}>
                        <Notifications />
                    </button>

                    <button
                        className="bg-white text-primary p-2 rounded-full"
                        onClick={handleOpenAddChannel}
                    >
                        <CreateOutlined />
                    </button>
                </div>

                <div className="flex justify-between items-center p-4">
                    <h2 className="font-bold text-xl text-white">Channels</h2>
                    <button onClick={toggleSidebar} className="md:hidden">
                        <Close className="text-white" />
                    </button>
                </div>

                <hr className="border-gray-500 border-opacity-30" />

                {/* Channels List */}
                <div>
                    {channels.map((channel) => (
                        <button
                            key={channel._id}
                            id={channel._id}
                            name={channel.channelName}
                            className={`w-full text-white text-left py-2 px-4 font-bold opacity-80 hover:bg-[#1164A3] cursor-pointer ${channel._id === channelId ? "bg-[#1164A3]" : ""
                                }`}
                            onClick={handleActiveChannel}
                        >
                            # &nbsp; {channel.channelName}
                        </button>
                    ))}
                </div>

            </div>

            {/* Overlay for mobile view */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleSidebar}
            ></div>

            {/* Add Channel Modal */}
            <AddChannel
                openAddChannel={openAddChannel}
                handleCloseChannelBox={handleCloseChannelBox}
            />

            {/* Notification Modal */}
            <Notification
                openNotification={openNotification}
                handleCloseNotification={handleCloseNotification}
            />
        </>
    );
}

export default SideBar;
