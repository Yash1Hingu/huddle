import logo from '../../assets/images/landingpage/logo.svg';
import mockup from '../../assets/images/landingpage/illustration-mockups.svg';
import { NavLink } from 'react-router-dom';

function HeroSection() {
    return (
        <>
            <header className='font-poppins flex justify-between items-center p-8 md:py-8 md:px-24'>
                <img
                    src={logo}
                    alt="logo"
                    className='w-[100px] md:w-auto'
                    data-aos="fade-down"
                    data-aos-duration="1000"
                />
                <button className='px-8 py-1 md:px-8 md:py-2 bg-white rounded-full shadow-2xl outline-none'>
                    <NavLink to='/register' className='text-xs md:text-lg'>
                        Try it Free
                    </NavLink>
                </button>
            </header>
            <main className='px-8 md:px-24 flex-1 flex md:mt-32'>
                <div className='md:flex items-center justify-between md:gap-8'>
                    <div data-aos="fade-up-right" data-aos-duration="1000">
                        <h1 className='text-xl text-center mt-12 md:mt-0 md:text-left md:text-5xl font-bold mb-8'>Chat Instantly. Stay Connected. Anytime, Anywhere.</h1>
                        <p className='text-center  md:text-left text-gray-500 md:text-lg'>
                            Huddle transforms the way you communicate with your friends, family, and communities. Whether it's one-on-one chats, group messages, or media sharing, Huddle makes it easy to stay connected.
                        </p>

                        <NavLink to='/register' className='bg-pink px-8 md:px-16 py-2 md:py-4 rounded-full text-white block w-fit m-auto mt-8 md:mt-4 md:mx-0'>
                            Start Messaging For Free
                        </NavLink>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000">
                        <img
                            src={mockup}
                            alt="mockup"
                            className='my-24 md:my-0 md:max-w-[600px]'
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default HeroSection
