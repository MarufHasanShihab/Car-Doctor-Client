import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import Navbar from "../Components/Navbar/Navbar";
import { loginNavItems } from "../data/NavItems";
import useAuth from './../hooks/useAuth';

const Login = () => {
  const {loginUser} = useAuth();
  const handleUserLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email,password)
    .then(user => {
      console.log(user.user)
    })
    .catch(error => {
      console.log(error.message.split('/')[1].split('-').join(' '));
    })
  }
  return (
    <div>
        <Navbar navItems={loginNavItems}/>
      <div className="flex flex-col-reverse md:flex-row my-6 gap-8 md:items-center md:gap-0 ">
        <div className="lg:w-1/2  mx-8 ">
          <img
            src={login}
            alt=""
            className="w-[350px] md:w-[400px] flex-shrink-0"
          />
        </div>
        <div className="lg:w-1/2  bg-white/20 shadow-lg py-6 px-4 md:p-8 mx-4 md:mx-24  border border-[#e8e8e8] rounded-lg ">
          <h2 className="text-center text-[#444444] text-[40px] font-semibold">
            Login
          </h2>
          <form onSubmit={handleUserLogin} className="p-6 space-y-4">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 bg-white rounded-md border border-gray-400 outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 bg-white rounded-md border border-gray-400 outline-none"
                placeholder="Password"
                required
              />
            </div>
            <button className="bg-[#FF3811] w-full py-2 px-4 text-white font-normal rounded-lg">
              Login
            </button>
          </form>
          <h2 className="text-center text-neutral-500">
            Have an account?{" "}
            <Link to="/sign-up" className="text-[#FF3811]">
              Register now
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
