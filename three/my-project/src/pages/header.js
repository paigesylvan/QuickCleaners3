import React from 'react';
import Logo from '../media/logo2.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-white fixed md-shadow sticky top-0 z-2 shadow-xl'>
            <div className='  text-2xl flex justify-between justify-around'>
                <img className='  w-[24%] h-21 ml-4 mt-3' src={Logo} alt='Quick Cleaners'/>

                <div className='flex space-x-20 py-10' >
                    <Link className="" to="/services"> Our Services</Link>
                    <Link className="" to="/customers" > Our Customers</Link>
                </div>
                
            </div>
        </div>

      
    )
};

export default Header;
