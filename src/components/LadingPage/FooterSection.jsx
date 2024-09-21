import logo from '../../assets/images/landingpage/logo.svg';
import location from '../../assets/images/landingpage/icon-location.svg';
import phone from '../../assets/images/landingpage/icon-phone.svg';
import email from '../../assets/images/landingpage/icon-email.svg';

function FooterSection() {
    return (
        <footer className='bg-very-dark-cyan px-4 md:px-32 py-28 text-white relative'>
            <div className='absolute -top-28 z-10 w-full left-0'>
                <div className='bg-white text-very-dark-cyan flex flex-col w-[95vw] md:w-fit m-auto  p-8 md:p-12 md:px-24 rounded-lg'>
                    <h3
                        className='text-2xl text-center text-very-dark-cyan font-bold mb-4'
                        data-aos="fade-right" data-aos-duration="1000"
                    >
                        Ready To Start Messaging?
                    </h3>
                    <button
                        className='bg-pink px-8 py-4 rounded-full text-white font-bold'
                        data-aos="fade-left" data-aos-duration="1000"
                    >
                        Get Started For Free
                    </button>
                </div>
            </div>
            <div>
                <img src={logo} alt="logo" class="white-logo" />
                <div className='md:flex items-start gap-4 mt-12'>
                    <div className='flex flex-col gap-4 mb-4'>
                        <span className='flex items-start gap-4 md:gap-2'>
                            <img src={location} alt="location" className='mt-1' />
                            <p className='flex-1 md:flex-none md:w-1/3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </span>
                        <span className='flex items-center gap-4 md:gap-2'>
                            <img src={phone} alt="phone" />
                            <p>
                                +1-543-123-4567
                            </p>
                        </span>
                        <span className='flex items-center gap-4 md:gap-2'>
                            <img src={email} alt="email" />
                            <p>
                                example@huddle.com
                            </p>
                        </span>
                    </div>

                    <div className='flex flex-col gap-2 md:gap-4'>
                        <p>About Us</p>
                        <p>What We Do</p>
                        <p>FAQ</p>
                    </div>

                    <div className='flex flex-col gap-2 mt-2 md:mt-0 md:gap-4'>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>

                </div>
                <div className='text-center mt-8 md:text-left text-gray-400'>
                    &copy; Copyright 2018 Huddle. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
