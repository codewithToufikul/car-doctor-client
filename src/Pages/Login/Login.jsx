import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import login from '../../assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        signInUser(email, password)
        .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(error);
          });
    }
  return (
    <div className="hero my-10">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full rounded-sm border-2 py-7 max-w-sm  bg-base-100">
            <h1 className=' text-center text-3xl font-semibold'>Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#FF3811]">Login</button>
            </div>
          </form>
          <div className=" px-6 divider">Or Sign In with</div>
          <div className=' flex gap-4 mt-3 items-center justify-center'>
            <p className=' text-xl rounded-full bg-[#F5F5F8] p-2 text-blue-500 '><FaFacebookF /></p>
            <p className=' text-xl rounded-full bg-[#F5F5F8] p-2 text-blue-500 '><FaLinkedinIn /></p>
            <p className=' text-xl rounded-full bg-[#F5F5F8] p-2 text-blue-500 '><FcGoogle /></p>
          </div>
          <h3 className=' text-center my-4'>Don't Have an account? <Link to="/signup" className=' text-red-500 font-bold'>Sign Up</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
