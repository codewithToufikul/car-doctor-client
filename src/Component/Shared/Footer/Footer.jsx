import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/icons/logo.svg'
const Footer = () => {
  return (
    <div className='p-20 bg-[#151515]'>
        <footer className="footer px-5 items- justify-between max-w-[1140px] mx-auto ">
      <nav className=' text-white'>
        <img src={logo} alt="" />
        <p className=' text-lg'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
        </p>
        <div className=' flex gap-3 mt-3'>
            <p className=' cursor-pointer p-2 rounded-full text-2xl bg-slate-600'><FaGoogle /></p>
            <p className='cursor-pointer p-2 rounded-full text-2xl bg-slate-600'><FaTwitter /></p>
            <p className='cursor-pointer p-2 rounded-full text-2xl bg-slate-600'><FaInstagram /></p>
            <p className='cursor-pointer p-2 rounded-full text-2xl bg-slate-600'><FaLinkedin /></p>
        </div>
      </nav>
      <nav className=' space-y-3'>
        <h6 className="footer-title opacity-100  text-white">Services</h6>
        <a className="link link-hover text-white">Home</a>
        <a className="link link-hover text-white">Services</a>
        <a className="link link-hover text-white">Contact</a>
      </nav>
      <nav className=''>
        <h6 className="footer-title opacity-100 text-white">Company</h6>
        <a className="link link-hover text-white">Why Car Doctor</a>
        <a className="link link-hover text-white">About</a>
      </nav>
      <nav className=' space-y-3'>
        <h6 className="footer-title opacity-100 text-white">Support</h6>
        <a className="link link-hover text-white">Support Center</a>
        <a className="link link-hover text-white">Feedback</a>
        <a className="link link-hover text-white">Accesbility</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;
