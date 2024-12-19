import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, img, title,price} = service || {};
    return (
        <div className="bg-white p-4 space-y-3 shadow-md  border border-[#e8e8e8] rounded-md">
            <img src={img} alt="" className="w-[350px] h-52 rounded-[10px] mx-auto" />
           <div className="px-4">
           <h2 className="text-[#444444] font-bold text-[25px]">{title}</h2>
            <div className="flex justify-between text-xl font-semibold text-[#ff3811] mt-2">
                <p>Price : {price}</p>
                <Link to={`/check-out/${_id}`}><FaArrowRight/></Link>
            </div>
           </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;