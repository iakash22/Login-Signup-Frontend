import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast'
const Navbar = ({logIn, setIsLoggedIn}) => {
    return (
        <div className=" flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/" >
                <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
            </Link>

            <nav>
                <ul className='flex gap-x-6 text-richblack-100'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>
            
            <div className='flex items-center text-richblack-100 gap-x-4' >
                {   
                    !logIn && 
                    <Link to='/login'>
                        <button className=' bg-richblack-800 py-[8px] px-[12px] text-richblack-100 rounded-[8px] border border-richblack-700'>
                            Log in
                        </button>
                    </Link>
                }
                
                {
                    !logIn &&
                    <Link to='/signup'>
                        <button className=' bg-richblack-800 py-[8px] px-[12px] text-richblack-100 rounded-[8px] border border-richblack-700'>
                            Sign up
                        </button>
                    </Link>
                }
                {
                    logIn &&
                    <Link to='/'>
                        <button onClick={() => {
                            setIsLoggedIn(false)
                            toast.success('Logout Successfully')
                        }} className=' bg-richblack-800 py-[8px] px-[12px] text-richblack-100 rounded-[8px] border border-richblack-700' >
                            Log out
                        </button>
                    </Link>
                }
                {
                    logIn &&
                    <Link to='/dashboard'>
                        <button className=' bg-richblack-800 py-[8px] px-[12px] text-richblack-100 rounded-[8px] border border-richblack-700' >
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
