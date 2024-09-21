import grow from '../../assets/images/landingpage/illustration-grow-together.svg';
import flowing from '../../assets/images/landingpage/illustration-flowing-conversation.svg';
import yourusers from '../../assets/images/landingpage/illustration-your-users.svg'

const fetures = [
    {
        title: "Stay Close with Your Loved Ones",
        subtitles: "Huddle enables you to have secure, private conversations with your favorite people. Whether you're sharing photos, videos, or just chatting, it's all in real-time. Start a conversation and let the connection grow!",
        imgsrc: grow
    },
    {
        title: "Real-Time Chats, Rich Conversations",
        subtitles: "Why wait? With Huddle, messages are delivered instantly, ensuring your chats are fluid and uninterrupted. Share text, photos, videos, voice messages, or even make voice and video calls seamlessly—all in one place.",
        imgsrc: flowing
    },
    {
        title: "End-to-End Encryption",
        subtitles: "With Huddle, your conversations are secure and private. Every message is protected with end-to-end encryption, ensuring that only you and the people you're communicating with can read or listen to them.",
        imgsrc: yourusers
    }
]

function FeturesSection() {
    return (
        <div className="px-6 py-12 md:px-24 md:py-16 font-open-sans md:pb-44 pb-44">
            {fetures.map(feture => <div className='flex flex-col md:flex-row md:flex items-center justify-between px-8 py-12 md:px-16 md:py-12 shadow-xl rounded-3xl'>
                <div data-aos="fade-up-right" data-aos-duration="1000" className='order-2 md:order-1 text-center md:text-left'>
                    <h3 className='text-xl md:text-3xl font-bold'>{feture.title}</h3>
                    <p className='text-sm mt-8 md:mt-0 md:text-base text-gray-600'>
                        {feture.subtitles}
                    </p>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000" className='order-1 md:order-2'>
                    <img src={feture.imgsrc} alt="Grow Together"
                        className='p-4'
                    />
                </div>
            </div>)}

        </div>
    )
}

export default FeturesSection
