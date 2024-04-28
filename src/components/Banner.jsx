import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
const Banner = () => {
    return (
        <div className='relative'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg">
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-screen md:h-[800px] object-cover' src={slider4} alt="" /></SwiperSlide>
            </Swiper>

            <div className='absolute md:top-48 lg:top-72 lg:left-[460px] z-10 text-center hidden md:block p-4'>
                <Fade direction='down' triggerOnce={true}>
                    <h2 className='text-7xl font-bold text-white'>Unveiling the beauty of textile <br /> <span className='text-amber-700'>
                        <Typewriter words={['arts online']} loop={5} cursor cursorStyle='_' typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}></Typewriter>
                    </span></h2>
                </Fade>
                <Fade triggerOnce={true}>
                    <p className='text-xl text-amber-50 mt-4'>Immerse yourself in a tapestry of creativity with our textile arts platform.</p>
                </Fade>
                <Fade direction='up' triggerOnce={true}>
                    <button className='bg-amber-300 px-6 py-4 rounded-lg text-xl font-semibold hover:bg-amber-200 mt-8'>Explore More</button>
                </Fade>
            </div>
        </div>
    );
};

export default Banner;