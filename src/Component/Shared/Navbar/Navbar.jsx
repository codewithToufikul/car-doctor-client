import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg'
import { BsHandbag } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {
    const navLink = <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="contact">Contact</Link></li>
    </>
  return (
    <div className="navbar sticky top-0 z-50 h-[80px] bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navLink}
          </ul>
        </div>
        <img className=' w-[80px]' src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <div className=' flex items-center gap-4 mr-5'>
            <p className=' cursor-pointer text-2xl font-semibold'><BsHandbag /></p>
            <p className=' cursor-pointer mt-1 text-[28px] font-semibold'> <IoSearchOutline /></p>
        </div>
        <a className="btn rounded-none bg-transparent border-2 text-lg text-red-400 border-red-400" >Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
