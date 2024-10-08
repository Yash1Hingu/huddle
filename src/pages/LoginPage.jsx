import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';
import logo from '../assets/images/landingpage/logo.svg';
import image from '../assets/images/loginregister/yash-3d.png';
import message from '../assets/images/loginregister/message.gif';
import Loader from '../components/Loader';
import Layout from '../layouts/Layout';
import { isPassword } from '../util/validation';

function LoginPage() {


    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const msg = isPassword(user.password);

        if (msg) {
            setError(msg);
            setLoading(false);
            return;
        }

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, user).then((response) => {
            Cookies.set('authToken', response.data.token, { expires: 7 });
            setLoading(false);
            navigate('/dashboard/0');
        }).catch(error => {
            setLoading(false);
            setError(error.response.data.message);
        })
    }


    return (
        <Layout>
            <div className='md:h-screen w-screen'>
                <div
                    id='login_header'
                    className='px-16 pt-8 md:py-8'
                >
                    <NavLink to='/'>
                        <img src={logo} alt="logo"
                            className='w-[100px] m-auto md:w-auto md:m-0'
                        />
                    </NavLink>
                </div>
                <div
                    id='login_body'
                    className='px-8 md:grid grid-cols-2 md:px-16 md:mt-8  mb-12 md:mb-0'
                >
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col mt-12'>
                            <h1 className='text-3xl md:text-5xl font-bold'>Sign in to</h1>
                            <h3 className='text-xl md:text-2xl mb-8 mt-4 font-bold text-gray-700'>Connect with your friends, family, and communities seamlessly.</h3>
                            <h5 className='text-gray-800 text-base md:text-xl'>If you don’t have an account register</h5>
                            <h5 className='text-base md:text-xl'>You can <NavLink
                                to='/register'
                                className='text-pink font-bold'
                            >Register here</NavLink> !</h5>
                        </div>
                        <div className='relative hidden sm:block' data-aos="fade-up" data-aos-duration="1000" >
                            <img
                                src={image}
                                alt="3d model"
                                className='w-[400px] -mt-12 ml-72 transform scale-x-[-1]'
                            />
                            {/* <img
                            src={message}
                            alt="message"
                            className='absolute top-0 w-48'
                        /> */}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <form
                            onSubmit={handleSubmit}
                            className='flex flex-col items-start w-[350px]'
                        >
                            <h2
                                className='hidden md:block text-3xl mb-8 font-bold text-very-dark-cyan'
                            >Sign in</h2>
                            <input
                                type="email"
                                value={user.email}
                                name='email'
                                onChange={handleChange}
                                id="email"
                                className='bg-gray-200 w-full py-3 rounded-md px-4 mt-4 outline-none'
                                placeholder='Enter email'
                                required
                            />
                            <input
                                type="password"
                                value={user.password}
                                name='password'
                                onChange={handleChange}
                                id="password"
                                className='bg-gray-200 w-full py-3 rounded-md px-4 mt-4 outline-none'
                                placeholder='Password'
                                required
                            />
                            {!error ? '' :
                                <p className='text-sm text-red-600 mt-4'>{error}</p>
                            }
                            <button
                                type="submit"
                                className='mt-8 bg-pink w-full px-4 py-3 rounded-xl text-white'
                            >
                                {!loading ? 'Login' : <Loader />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage
