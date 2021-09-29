import React from 'react';
import { useState } from 'react';
//import './navbar.style.scss';
//import Search from '../search/search.component';
import Logo from '../assets/netflix-logo.svg';
//import Notifications from '@material-ui/icons/Notifications';
import Avatar from '../assets/netflix-avatar.png'
import { MoreVert } from '@mui/icons-material';
import Image from "next/image";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { selectMovie, selectPopular, selectTv } from '../redux/slices/navbarSlice';
import { useSession, signIn, signOut } from "next-auth/client"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const session = useSession();
    // window.onscroll = () => {
    //     setIsScrolled(window.pageYOffset === 0 ? false : true);
    //     return () => (window.onscroll = null);
    // }

    const mo = useSelector(selectMovie);
    const tv = useSelector(selectTv);
    const po = useSelector(selectPopular);

    const [click, setClick] = useState(false);

    return (
        <div className='fixed z-10 w-screen'>

            <div className='bg-black text-white flex justify-between text-xs md:text-sm p-3.5 border-b-2 border-red-600'>

                <div className='flex items-center'>
                    <div onClick={() => router.push("/")}
                        className="h-10 w-24 mb-2 mr-3 cursor-pointer">
                        <Image src={Logo} alt="logo" width="1920" height="1080" />
                    </div>
                    <div className='justify-between hidden md:flex'>
                        <p onClick={() => router.push("/movies")}
                            className={`cursor-pointer p-2 border ${mo ? 'border-red-600' : 'border-black'} hover:border-red-600`}>Movies</p>
                        <p onClick={() => router.push("/tvshows")}
                            className={`cursor-pointer p-2 border ${tv ? 'border-red-600' : 'border-black'} hover:border-red-600`}>TV Shows</p>
                        <p onClick={() => router.push("/newandpopular")}
                            className={`cursor-pointer p-2 border ${po ? 'border-red-600' : 'border-black'} hover:border-red-600`}>New and Popular</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='items-center flex'>
                        <div className="h-10 w-6 pt-2 mr-3 cursor-pointer">
                            {
                                (session[0]) ? (
                                    <>
                                        {/* <p>Signed in as {session[0].user.name} {session[0].user.email}</p>
                                      <button onClick={() => signOut()}>Sign out</button> */}
                                        <Image src={session[0].user.image} alt="logo" width="1080" height="1080" onClick={() => signOut()} />
                                    </>
                                ) : (
                                    <>
                                        {/* <p>Not signed in</p>
                                      <button onClick={() => signIn()}>Sign in</button> */}
                                        <Image src={Avatar} alt="logo" width="1080" height="1080" onClick={() => signIn()} />
                                    </>
                                )
                            }
                            {/* <Image src={Avatar} alt="logo" width="1080" height="1080" /> */}
                        </div>
                    </div>
                    <MoreVert onClick={()=> setClick(!click)}
                    className='md:hidden hover:scale-150 transition ease-in-out duration-300 cursor-pointer text-2xl' />
                    {
                        click && (
                            <div className='md:hidden absolute flex justify-between flex-col top-16 right-5 bg-black p-3 border-2 border-red-600'>
                                <p onClick={() => router.push("/movies")}
                                    className={`cursor-pointer p-2 border ${mo ? 'border-red-600' : 'border-black'} hover:border-red-600`}>Movies</p>
                                <p onClick={() => router.push("/tvshows")}
                                    className={`cursor-pointer p-2 border ${tv ? 'border-red-600' : 'border-black'} hover:border-red-600`}>TV Shows</p>
                                <p onClick={() => router.push("/newandpopular")}
                                    className={`cursor-pointer p-2 border ${po ? 'border-red-600' : 'border-black'} hover:border-red-600`}>New and Popular</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Navbar;