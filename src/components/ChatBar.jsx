import { Send } from "@mui/icons-material"
import { Avatar } from "@mui/material"

const messages = [
    { name: 'Alice', time: '10:15 AM', message: 'Hey, are we still on for the meeting?' },
    { name: 'Bob', time: '10:18 AM', message: 'Yes, I’ll be there in 5 minutes.' },
    { name: 'Charlie', time: '10:20 AM', message: 'Can you send me the files?' },
    { name: 'David', time: '10:22 AM', message: 'Sure, I’ll email them to you now.' },
    { name: 'Eve', time: '10:25 AM', message: 'Let’s catch up later today.' },
    { name: 'Frank', time: '10:30 AM', message: 'Don’t forget to review the report.' },
    { name: 'Grace', time: '10:32 AM', message: 'I’ve sent over the documents.' },
    { name: 'Hank', time: '10:35 AM', message: 'Got it, thanks!' },
    { name: 'Ivy', time: '10:40 AM', message: 'Is the presentation ready?' },
    { name: 'Jack', time: '10:45 AM', message: 'Yes, I’m just making final adjustments.' },
    { name: 'Kathy', time: '10:50 AM', message: 'Can we reschedule our meeting to tomorrow?' },
    { name: 'Leo', time: '10:55 AM', message: 'Tomorrow works for me. What time?' },
    { name: 'Mona', time: '11:00 AM', message: 'I’ll be out of office today.' },
    { name: 'Nick', time: '11:05 AM', message: 'Thanks for the update, Mona.' },
    { name: 'Olivia', time: '11:10 AM', message: 'Have you reviewed the project proposal?' },
    { name: 'Paul', time: '11:15 AM', message: 'Yes, looks good to me.' },
    { name: 'Quincy', time: '11:20 AM', message: 'Let’s finalize the budget by noon.' },
    { name: 'Rachel', time: '11:25 AM', message: 'Will do, I’m working on it now.' },
    { name: 'Sam', time: '11:30 AM', message: 'Can we talk after lunch?' },
    { name: 'Tina', time: '11:35 AM', message: 'Sure, let’s meet at 2 PM.' }
];


function ChatBar({ title }) {
    return (
        <div className="flex-1 relative">
            {/* chat header */}
            <div className="p-4 border-b-2 border-gray-300">
                <h2 className="font-bold text-xl"># social-media</h2>
            </div>
            {/* chat's */}
            <div className="p-4 h-[80vh] overflow-y-scroll scrollbar-thick pb-20">
                {/* chat message container */}
                {messages.map(message => <div className="flex items-start gap-2 mb-4">
                    <div>
                        <Avatar
                            alt="User Profile"
                            src='https://via.placeholder.com/200'
                            sx={{ width: 45, height: 45, borderRadius: '8px', margin: '2px' }}
                        />
                    </div>
                    <div className="w-10/12">
                        <div className="flex gap-2">
                            <span className="font-bold">{message.name}</span>
                            <span className="opacity-70">{message.time}</span>
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
                ></input>
                <button className="absolute right-4 bottom-4 p-4 bg-[#1164A3] rounded-md rounded-l-none">
                    <Send className="text-white" />
                </button>
            </div>
        </div>
    )
}

export default ChatBar
