import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
const Banner = () => {
    return (
        <div className='px-2 lg:px-16 pt-2 lg:pt-8 relative'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg">
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider4} alt="" /></SwiperSlide>
            </Swiper>

            <div className='absolute md:top-48 lg:top-72 lg:left-[460px] z-10 text-center hidden md:block'>
                <h2 className='text-7xl font-bold text-white'>Unveiling the beauty of textile <br /> arts online.</h2>
                <p className='text-xl text-amber-50 mt-4'>Immerse yourself in a tapestry of creativity with our textile arts platform.</p>
                <button className='bg-amber-300 px-6 py-4 rounded-lg text-xl font-semibold hover:bg-amber-200 mt-8'>Explore More</button>
            </div>
        </div>
    );
};

export default Banner;