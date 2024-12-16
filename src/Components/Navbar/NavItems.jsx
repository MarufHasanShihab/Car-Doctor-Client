import { Link } from "react-scroll";
import PropTypes from "prop-types";

const NavItems = ({ navItems }) => {
  return (
    <ul className="hidden lg:flex items-center gap-10">
      {navItems?.map((item) => (
        <li key={item.id} className="cursor-pointer text-[#444444] text-lg font-semibold">
          <Link to={item?.to} smooth={true} offset={0} duration={500}>
            {item?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

NavItems.propTypes = {
  navItems: PropTypes.array,
};

export default NavItems;
