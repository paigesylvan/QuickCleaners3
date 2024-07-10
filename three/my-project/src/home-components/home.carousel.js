import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useState } from 'react';


export default function Carousel({slides}) {

    let [ current, setCurrent ] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    return  (
    <div className='overflow-hidden absolute h-[86%] '>
        <div 
        className={`flex transition ease-out duration-1000 m-auto h-[120%] `}
        style={{transform: `translateX(-${current * 100}%)` }}
    >
            {slides.map((s) => {
                return (
                        <img className=' max-w-full' src={s} alt='' />
                )
            })}
        </div>
        <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
            <button onClick={previousSlide}>
                <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide}>
                <FaArrowCircleRight />
            </button>
        </div>

        <div className='absolute bottom-0 py-4 flex justify-center gap-4 w-full'>
            {slides.map((s, i) => {
                return (
                <div 
                onClick={()=>{
                    setCurrent(i)
                }}
                key={"circle" + 1}
                className={`rounded-full w-3 h-3 cursor-pointer ${i===current? 'bg-white': 'bg-gray-300'}`}
                ></div>
                )  
            })}
        </div>
    </div>
    );
}