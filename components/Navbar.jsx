import React from 'react';
import { useState } from 'react';
//import './navbar.style.scss';
//import Search from '../search/search.component';
import Logo from '../assets/netflix-logo.svg';
//import Notifications from '@material-ui/icons/Notifications';
import Avatar from '../assets/netflix-avatar.png'
import { MoreVert, Notifications } from '@mui/icons-material';
import Image from "next/image";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // window.onscroll = () => {
    //     setIsScrolled(window.pageYOffset === 0 ? false : true);
    //     return () => (window.onscroll = null);
    // }

    return (
        <div className='fixed z-10 w-screen'>

            <div className='bg-black text-white flex justify-between text-xs md:text-sm p-3.5 border-b-2 border-red-600'>

                <div className='flex items-center'>
                    <div className="h-10 w-24 mb-2 mr-3">
                        <Image src={Logo} alt="logo" width="1920" height="1080" />
                    </div>
                    <div className='flex justify-between'>
                        <p className='cursor-pointer p-2 border border-black hover:border-red-600'>Movies</p>
                        <p className='mx-3 cursor-pointer p-2 border border-black hover:border-red-600'>TV Shows</p>
                        <p className='cursor-pointer p-2 border border-black hover:border-red-600'>New and Popular</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='items-center hidden md:flex'>
                        <p>KID</p>
                        <Notifications className='mx-3' />
                        <div className="h-10 w-6 pt-2 mr-3">
                            <Image src={Avatar} alt="logo" width="1080" height="1080" />
                        </div>
                    </div>
                    <MoreVert className='md:hidden hover:scale-150 transition ease-in-out duration-300 cursor-pointer text-2xl' />
                </div>

            </div>
        </div>
    )
}

export default Navbar;