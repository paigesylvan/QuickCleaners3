import ImageGallery from '../home-components/home.serviceimg'

export default function Middle() {
    return (
        <div>
            <div >
                <h1 className='flex ml-20 mr-20 text-center justify-center mt-[180px] mb-[100px] text-7xl leading-relaxed italic'> 
                Your Local Experts in Fabric Care and Meticulous Garment Treatment for Over 20 Years</h1>
                <hr class="w-[90%] h-1 m-5 mx-auto  bg-gray-300 border-20 rounded md:my-10 dark:bg-gray-300"/>
            </div>
            <div>
                <h1 className='flex ml-20 mr-20 mt-24 mb-[60px] text-center justify-center  text-6xl font-bold'>Services</h1>
                <h2 className='flex ml-20 mb-[35px] mr-26 text-center justify-center text-5xl'
                > Quick Cleaners  provides a laundry service that fits your needs and lifestyle</h2>
                <ImageGallery/>
            </div>
        </div>
    )
}