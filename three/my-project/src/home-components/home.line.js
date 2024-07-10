import React, { useState, useEffect } from 'react';
import two from '../media/2.png'

const LineList = () => {
    const [visibleLines, setVisibleLines] = useState([]);
    
  
    useEffect(() => {
    const lines = ["Distinctive Care", "For All That", "You Wear",];

        const interval = setInterval(() => {
        setVisibleLines((prevLines) => {
          const nextLineIndex = prevLines.length;
          if (nextLineIndex < lines.length) {
            return [...prevLines, lines[nextLineIndex]];
          } else {
            clearInterval(interval);
            return prevLines;
          }
        });
      }, 900);

      return () => clearInterval(interval);
    }, );

  return (
<div>
        <div
            className="relative h-[1215px] w-full bg-center"
            style={{ backgroundImage: `url(${two})`, backgroundSize: 'cover', backgroundPosition: 'center', }}
        >
        </div>
         <div className="absolute inset-0 flex flex-col justify-center items-left ml-30  ">
         {visibleLines.map((line, index) => (
           <div
             key={index}
             className=" p-10 text-8xl text-black transition-opacity duration-150 ease in drop-shadow-lg font-custom"
           >
             {line}
           </div>
         ))}
       </div>

</div>
  );
};

export default LineList;