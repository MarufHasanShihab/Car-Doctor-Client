// import all images
import cleander from "../../../assets/icons/cleander.png";
import phone from "../../../assets/icons/phone.png";
import location from "../../../assets/icons/location.png";

const Contact = () => {
  return (
    <div id="Contact" className="bg-[#151515] rounded-[10px] p-14 my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex items-center gap-6">
        <img src={cleander} alt="cleander__img" />
        <div>
          <p className="text-white text-[14px] md:text-base font-medium ">
            We are open monday-friday
          </p>
          <p className="text-white text-[20px] md:text-[23px] font-bold ">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <img src={phone} alt="phone__img" />
        <div>
          <p className="text-white text-[14px] md:text-base font-medium ">Have a question?</p>
          <p className="text-white text-[20px] md:text-[23px] font-bold ">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <img src={location} alt="location__img" />
        <div>
          <p className="text-white text-[14px] md:text-base font-medium ">
            Need a repair? our address
          </p>
          <p className="text-white text-[20px] md:text-[23px] font-bold ">
            Liza Street, New York
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
