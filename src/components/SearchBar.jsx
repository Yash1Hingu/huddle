import { ArrowBack, ArrowForward, HelpOutline, History } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function SearchBar({ isOnline }) {
    return (<div className='flex items-center justify-end bg-secondary text-white px-4 py-2 max-w-[2000px] m-auto'>
        <div
            className='flex items-center justify-center w-full'
        >
            <ArrowBack
                className='cursor-pointer mr-4 text-gray-400'
            />
            <ArrowForward
                className='cursor-pointer mr-4 text-gray-400'
            />

            <History
                className='cursor-pointer mr-4 text-gray-400'
            />

            <input
                type="text"
                placeholder='Search A1 Marketing Ltd.'
                className='w-96 bg-white bg-opacity-20 text-white rounded-lg py-1 px-4 focus:outline-none placeholder-white placeholder-opacity-50 text-center border-2 border-gray-400'
            />

            <HelpOutline 
                className='cursor-pointer ml-4 text-gray-400'
            />
        </div>

        <div className='relative ml-auto'>
            <Avatar
                alt="User Profile"
                src='https://via.placeholder.com/150'
                sx={{ width: 35, height: 35, borderRadius: '8px' }}
            />

            <span
                className={`z-10 absolute -bottom-1 -right-1 w-3 h-3 rounded-full  ${isOnline ? 'bg-green-500' : 'bg-gray-500'} border-2 border-secondary`}
            />
        </div>
    </div>)
}

export default SearchBar;