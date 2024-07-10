import React from 'react';


const Footer = () => {
    return (
        <div className='bg-orange-700 flex justify-between'>
    
            <div className=' text-white text-3xl leading-relaxed p-20'>
                <p>Quick Cleaners</p>
                <div className='text-2xl'>
                    <p>2177 D Silvernail Road</p>
                    <p>Pewaukee, Wisconsin</p>
                    <p>262-549-9477</p>
                </div>     
            </div>

            <div className='text-white  p-20'>
                <p className='flex justify-center text-3xl'> Business Hours</p>
                    <div  className='flex justify-center text-xl'>
                        <div className='px-8'>
                            <p>Monday-Friday</p>
                            <p>Saturday</p>
                            <p>Sunday </p>
                        </div>
                        <div className='px-8'>
                            <p>7am - 6pm</p>
                            <p>8am - 12:30Pm</p>
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
