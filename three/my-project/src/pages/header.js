import React from 'react';
import Logo from '../media/logo2.png'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <div className='bg-white fixed md-shadow sticky top-0 z-2 shadow-xl max-w-full
        
        '>
            <div className='  text-2xl flex justify-between justify-around'>

               
               <Link to='/'> <img className=' max-w-[3000px] max-h-24 ml-4 mt-3 ' src={Logo} alt='Quick Cleaners'/></Link> 

                <div className='flex space-x-20 py-10 hidden lg:block md:block' >
                   
                    <Link className="" to="/services"> Our Services</Link>
                    <Link className="" to="/customers" > Our Customers</Link>
                </div>
                <div className='md:hidden'>
                    <RxHamburgerMenu />
                </div>
            </div>
        </div>

      
    )
};

export default Header;
