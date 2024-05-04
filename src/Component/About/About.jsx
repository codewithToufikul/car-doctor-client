import photo1 from '../../assets/images/about_us/person.jpg'
import photo2 from '../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero">
      <div className=" flex lg:flex-row-reverse">
        <div className="text-center p-5 lg:text-left">
            <p className=' text-red-500 text-lg font-bold'>About Us</p>
          <h1 className="text-5xl font-bold mt-3">We are qualified <br /> & of experience <br /> in this field</h1>
          <p className="py-6 text-lg">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 

          </p>
          <p className="py-4 text-lg">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className=' btn text-lg border-none rounded-sm bg-red-500 text-white'>Get More Info</button>
        </div>
        <div className="card p-5 shrink-0">
            <div className='  w-[550px] h-[550px] relative'>
                <img className='h-[480px] w-[460px] rounded-xl' src={photo1} alt="" />
                <img className='border-[10px] border-white rounded-xl w-[300px] right-0 bottom-0 absolute' src={photo2} alt="" />
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;
