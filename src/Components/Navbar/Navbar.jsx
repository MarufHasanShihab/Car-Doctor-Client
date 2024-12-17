import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import PropTypes from "prop-types"
import NavItems from "./NavItems";
import { IoPerson, IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = ({navItems}) => {
    return (
        <div className="flex items-center justify-between py-4 px-4">
            <Link to="/"><img src={logo} alt="nav__logo" className="w-16 md:w-20" /></Link>
            {/* nav items */}
            <NavItems navItems={navItems}/>
            {/* nav right */}
            <div className="flex items-center gap-6">
                <div className="flex gap-6 text-2xl">
                <Link to="/login"><IoPerson /></Link>
                <Link><HiOutlineShoppingBag /></Link>
                <IoSearchOutline/>
                </div>
                <button className="py-2 px-4 hidden sm:block text-[#ff3811] text-base border border-[#FF3811] rounded-md">Appointment</button>
            </div>
        </div>
    );
};

Navbar.propTypes={
    navItems: PropTypes.array
}

export default Navbar;