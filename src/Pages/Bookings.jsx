import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Navbar from "../Components/Navbar/Navbar";
import banner from "../assets/images/banner/booking_banner.png";
import { IoMdClose } from "react-icons/io";

const Bookings = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const url = `http://localhost:5000/orders/?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url,user]);
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{ backgroundImage: `url('${banner}')` }}
          className="w-full h-[300px] bg-no-repeat bg-cover bg-center">
          <div className="w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.4)] flex items-center">
            <h2 className="text-white  text-[45px] font-bold px-6 md:px-24">
              Orders Details
            </h2>
          </div>
        </div>
        <div className="w-full space-y-8 my-16">
         {
          orders.length > 1? ( orders?.map((order) => (
            <div key={order._id} className="flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-0 p-5 lg:p-0">
              <div className="flex items-center gap-3">
                <button className="w-[40px] h-[40px] bg-[#444444] text-white text-[18px] rounded-full"><IoMdClose className="mx-auto"/></button>
                <img src={order?.img} alt="order-img" className="w-[200px] rounded-lg" />
                <p>{order?.title}</p>
              </div>
              <p>{order?.price}</p>
              <p>{order?.date}</p>
              <div>
              <button className="py-2 px-4 border border-[#29B170] text-[#29B170] rounded-md">Approved</button>
              </div>
            </div>
          ))) : (<div className="w-full h-[30vh] flex items-center justify-center">
            <h2 className="capitalize text-center text-xl font-bold">You have not booked any services yet.</h2>
          </div>)
         }
        </div>
      </div>
    </div>
  );
};

export default Bookings;
