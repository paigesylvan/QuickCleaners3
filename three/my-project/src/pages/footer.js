import React from 'react';


const Footer = () => {
    return (
        <div className='bg-slate-500 white flex justify-between  absolute w-full font-custom '>
    
            <div className=' text-white text-3xl leading-relaxed p-20 ml-[440px]'>
                <p>Location</p>
                <div className='text-xl'>
                    <p>2177 D Silvernail Road</p>
                    <p>Pewaukee, Wisconsin</p>
                    <p>262-549-9477</p>
                </div>     
            </div>

            <div className='text-white p-20'>
                <p className='flex justify-center text-3xl'> Hours</p>
                    <div  className='flex justify-center text-xl pt-1'>
                        <div className='px-8'>
                            <p>Monday-Friday</p>
                            <p>Saturday</p>
                            <p>Sunday </p>
                        </div>
                        <div className='px-8'>
                            <p>7am - 6pm</p>
                            <p>8am - 12:30pm</p>
                            <p>Closed</p>
                        </div>
                    </div>
            </div>

 
                    
                <div>
            </div>
        </div>
   

      
    )
};

export default Footer;
