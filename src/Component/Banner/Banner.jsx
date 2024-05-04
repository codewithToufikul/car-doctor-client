import photo1 from '../../assets/images/banner/5.jpg'
import photo2 from '../../assets/images/banner/1.jpg'
import photo3 from '../../assets/images/banner/2.jpg'
import photo4 from '../../assets/images/banner/3.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Banner = () => {
  return (
    <div className="carousel mt-6 h-[600px] w-full">
      <div id="slide1" className="  carousel-item relative w-full">
        <img
          src={photo1}
          className=" rounded-2xl w-full"
        />
        <div className=" rounded-2xl bg-cover w-full h-full bg-gradient-to-r from-gray-900 to-transparent absolute flex gap-6  transform ">
          <div className=' max-w-[525px] mt-32 ml-16 space-y-4 '>
            <h1 className=' leading-[60px] text-white text-6xl font-semibold'>Affordable <br /> Price For Car Servicing</h1>
            <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=' flex gap-5'>
                <button className=' btn text-lg border-none rounded-sm bg-red-500 text-white'>Discover More</button>
                <button className=' btn text-lg rounded-sm bg-transparent  text-white'>Latest More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-6  transform   right-10 bottom-10">
          <a href="#slide4" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowLeft />
          </a>
          <a href="#slide2" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="rounded-2xl carousel-item relative w-full">
        <img
          src={photo2}
          className="w-full rounded-2xl"
        />
                <div className=" rounded-2xl bg-cover w-full h-full bg-gradient-to-r from-gray-900 to-transparent absolute flex gap-6  transform ">
          <div className=' max-w-[525px] mt-32 ml-16 space-y-4 '>
            <h1 className=' leading-[60px] text-white text-6xl font-semibold'>Affordable <br /> Price For Car Servicing</h1>
            <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=' flex gap-5'>
                <button className=' btn text-lg border-none rounded-sm bg-red-500 text-white'>Discover More</button>
                <button className=' btn text-lg rounded-sm bg-transparent  text-white'>Latest More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  gap-6  transform   right-10 bottom-10">
          <a href="#slide1" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowLeft />
          </a>
          <a href="#slide3" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="rounded-2xl carousel-item relative w-full">
        <img
          src={photo3}
          className="w-full rounded-2xl"
        />
                <div className=" rounded-2xl bg-cover w-full h-full bg-gradient-to-r from-gray-900 to-transparent absolute flex gap-6  transform ">
          <div className=' max-w-[525px] mt-32 ml-16 space-y-4 '>
            <h1 className=' leading-[60px] text-white text-6xl font-semibold'>Affordable <br /> Price For Car Servicing</h1>
            <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=' flex gap-5'>
                <button className=' btn text-lg border-none rounded-sm bg-red-500 text-white'>Discover More</button>
                <button className=' btn text-lg rounded-sm bg-transparent  text-white'>Latest More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  gap-6  transform   right-10 bottom-10">
          <a href="#slide2" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowLeft />
          </a>
          <a href="#slide4" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="rounded-2xl carousel-item relative w-full">
        <img
          src={photo4}
          className="w-full rounded-2xl"
        />
                <div className=" rounded-2xl bg-cover w-full h-full bg-gradient-to-r from-gray-900 to-transparent absolute flex gap-6  transform ">
          <div className=' max-w-[525px] mt-32 ml-16 space-y-4 '>
            <h1 className=' leading-[60px] text-white text-6xl font-semibold'>Affordable <br /> Price For Car Servicing</h1>
            <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className=' flex gap-5'>
                <button className=' btn text-lg border-none rounded-sm bg-red-500 text-white'>Discover More</button>
                <button className=' btn text-lg rounded-sm bg-transparent  text-white'>Latest More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  gap-6  transform   right-10 bottom-10">
          <a href="#slide3" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowLeft />
          </a>
          <a href="#slide1" className="btn btn-circle bg hover:bg-red-500 text-white bg-transparent ">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
