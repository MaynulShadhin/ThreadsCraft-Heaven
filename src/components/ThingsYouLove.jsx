import img from '../assets/thingsulove.jpg'
const ThingsYouLove = () => {
    return (
        <div className='mx-4 md:container md:mx-auto mt-12 border-2 border-amber-500 p-5'>
            <div className='md:flex items-center gap-4'>
                <div className='w-3/5'>
                    <p className="text-xl">NEW CATEGORY</p>
                    <h2 className="text-4xl font-bold mb-4">
                        Things that you love
                    </h2>
                    <p className="mb-4 lg:pr-44">Printmaking is a process of creating multiple copies of an image from a master. The master is created by inking a raised surface and then pressing it onto paper. There are many different types of printmaking, such as woodcut, lithography, and etching.</p>
                    <p className='lg:pr-44'>Sculpture is a three-dimensional art form created by shaping materials such as clay, stone, metal, or wood. Sculptures can be abstract or figurative, and they can be small or large.</p>
                </div>
                <div className='md:w-2/5 mt-4'>
                    <img className='rounded-xl' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ThingsYouLove;