import ImageGallery from '../components/home.serviceimg'

export default function Middle() {
    return (
        <div>
            <div >
                <h1 className='flex ml-20 mr-20 text-center justify-center mt-40 text-7xl'> 
                Your Local Experts in Fabric Care and Meticulous Garment Treatment for Over 20 Years</h1>
                <h2 className='flex ml-20 mb-36 mr-26 text-center justify-center mt-20 text-5xl'
                > Quick Cleaners  provides a laundry service that fits your needs and lifestyle</h2>
                <hr class="w-[90%] h-1 mt-20 mx-auto  bg-gray-300 border-20 rounded md:my-10 dark:bg-gray-300"/>
            </div>
            <div>
                <h1 className='flex ml-20 mr-20 text-center justify-center mt-24 text-6xl font-bold'>Services</h1>
                <ImageGallery/>
            </div>
        </div>
    )
}