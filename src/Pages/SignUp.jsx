import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import Navbar from "../Components/Navbar/Navbar";
import { loginNavItems } from "../data/NavItems";

const SignUp = () => {
  return (
    <div>
      <Navbar navItems={loginNavItems} />
      <div className="flex flex-col-reverse md:flex-row md:items-center my-6 gap-8 md:gap-0 ">
        <div className="lg:w-1/2 md:flex items-center mx-8 ">
          <img
            src={login}
            alt=""
            className="w-[350px] md:w-[400px] flex-shrink-0"
          />
        </div>
        <div className="lg:w-1/2  bg-white/20 shadow-lg py-6 px-4 md:p-8 mx-4 md:mx-24  border border-[#e8e8e8] rounded-lg ">
          <h2 className="text-center text-[#444444] text-[40px] font-semibold">
            Sign Up
          </h2>
          <form className="p-6 space-y-4">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 bg-white rounded-md border border-gray-400 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 bg-white rounded-md border border-gray-400 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 bg-white rounded-md border border-gray-400 outline-none"
              />
            </div>
            <button className="bg-[#FF3811] w-full py-2 px-4 text-white font-normal rounded-lg">
              Sign Up
            </button>
          </form>
          <h2 className="text-center text-neutral-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF3811]">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
