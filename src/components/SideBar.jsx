import { AddOutlined, CreateOutlined } from "@mui/icons-material"
import { Avatar } from "@mui/material";

const channels = [
    'project-alpha',
    'team-innovation',
    'frontend-team',
    'backend-devs',
    'design-lab',
    'general-discussion',
];

function SideBar() {
    return (
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
            </div>
            <div>
                {/* sidebar header */}
                <div className="flex justify-between items-center p-4 gap-2">
                    <h2 className="font-bold text-xl">Search A1 Marketing Ltd.</h2>
                    <button className="cursor-pointer">
                        <CreateOutlined className="text-primary bg-white p-2 rounded-full" fontSize="large" />
                    </button>
                </div>
                <hr className="border-gray-500 border-opacity-30" />
                {/* sidebar body */}
                <div>
                    {channels.map((channel) => (
                        <p className="py-2 px-4 font-bold opacity-80 hover:bg-[#1164A3] hover:bg-opacity-100 cursor-pointer hover:font-black">
                            # &nbsp; {channel}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar
