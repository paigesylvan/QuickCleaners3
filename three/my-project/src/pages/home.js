import two from '../media/2.png';
import Middle from '../home-components/home.section.js'
import LineList from '../home-components/home.line.js'
import Family from '../home-components/home.family.js'


export default function Home() {



return(
    <div >   

        <div >
            <LineList />
        </div>

         <div className=' '>
                <Middle/>
         </div>

         <div className='mt-[28%]'>
            <Family/>
         </div>
    </div>

);
}; 

