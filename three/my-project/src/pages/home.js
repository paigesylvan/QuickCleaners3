import two from '../media/2.png';
import Middle from '../components/home.section.js'
import LineList from '../components/home.line.js'
import Family from '../components/home.family.js'


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

