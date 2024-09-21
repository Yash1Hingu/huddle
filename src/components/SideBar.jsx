import { useEffect, useRef, useState } from "react";
import { AddOutlined, CreateOutlined, Notifications } from "@mui/icons-material"
import { Avatar } from "@mui/material";
import axios from "axios";
import Cookies from 'js-cookie';
import AddChannel from "./AddChannel";
import { useNavigate, useParams } from "react-router-dom";
import Notification from "../pages/Notification";


function SideBar({ setChannelName }) {

    const [channels, setChannels] = useState([]);
    const [openAddChannel, setOpenAddChannel] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const navigate = useNavigate();
    const { channelId } = useParams();

    const handleActiveChannel = (e) => {
        setChannelName(e.target.name);
        navigate(`/dashboard/${e.target.id}`)
    }

    const handleOpenAddChannel = () => {
        setOpenAddChannel(true);
    }

    const handleCloseChannelBox = () => {
        getChannels();
        setOpenAddChannel(false);
    }

    const handleOpenNotification = () => {
        setOpenNotification(true);
    }

    const handleCloseNotification = () => {
        getChannels();
        setOpenNotification(false);
    }

    const getChannels = () => {
        const token = Cookies.get('authToken');
        axios.get('http://localhost:3000/api/channels', {
            headers: {
                Authorization: `Bearer ${token}`  // Adding the token to the headers
            }
        })
            .then(response => {
                const channels = response.data.channels;
                setChannels(channels);
                setChannelName(channels[0].channelName)
                navigate(`/dashboard/${channels.length > 0 ? channels[0]._id : '0'}`)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        getChannels();
    }, [openNotification])


    return (
        <>
            <div className="bg-primary h-[93vh] flex text-white border-t-2 border-gray-500 border-opacity-30 max-w-[360px]">
                <div className="border-r-2 border-gray-500 border-opacity-30 px-2 py-4 flex flex-col gap-4 items-center">
                    <button className="border-4 border-white rounded-xl">
                        <Avatar
                            alt="User Profile"
                            src='https://via.placeholder.com/150'
                            sx={{ width: 35, height: 35, borderRadius: '8px', margin: '2px' }}
                        />
                    </button>
                    <button className="">
                        <Avatar
                            alt="User Profile"
                            src='https://via.placeholder.com/150'
                            sx={{ width: 35, height: 35, borderRadius: '8px', margin: '2px' }}
                        />
                    </button>
                    <button className="mt-4">
                        <AddOutlined />
                    </button>
                    <button className="mt-4" onClick={handleOpenNotification}>
                        <Notifications />
                    </button>
                </div>
                <div className="w-full">
                    {/* sidebar header */}
                    <div className="flex justify-between items-center p-4 gap-2">
                        <h2 className="font-bold text-xl">Channels</h2>
                        <button className="cursor-pointer" onClick={handleOpenAddChannel}>
                            <CreateOutlined className="text-primary bg-white p-2 rounded-full" fontSize="large" />
                        </button>
                    </div>
                    <hr className="border-gray-500 border-opacity-30" />
                    {/* sidebar body */}
                    <div>
                        {channels.map((channel) => (
                            <button className={`w-full text-left py-2 px-4 font-bold opacity-80 hover:bg-[#1164A3] hover:bg-opacity-100 cursor-pointer hover:font-black ${channel._id === channelId ? ' bg-[#1164A3]' : ''}`}
                                id={channel._id}
                                key={channel._id}
                                onClick={handleActiveChannel}
                                name={channel.channelName}
                            >
                                # &nbsp; {channel.channelName}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <AddChannel
                openAddChannel={openAddChannel}
                handleCloseChannelBox={handleCloseChannelBox}
            />

            <Notification
                openNotification={openNotification}
                handleCloseNotification={handleCloseNotification}
            />
        </>
    )
}

export default SideBar
