import Navbar from "../Components/Navbar/Navbar";
import { homeNavItems } from "../data/NavItems";
// import check out image
import check_out from "../assets/images/checkout/checkout.png";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";


const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service || {};
  const { user } = useAuth();
  const handleOrderConfirm = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const orderInfo = {
      firstName,
      lastName,
      phone,
      email,
      message,
      service_id:_id,
      title,
      price,
      img,
      loginEmail:user?.email
    };
    fetch('http://localhost:5000/orders',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(orderInfo)
    })
    .then(res => res.json())
    .then(data =>{
      if(data?.insertedId){
        toast.success("Your Order Confirm Sucessfully!")
        form.reset();
        return
      }
    })
  };
  return (
    <div>
      <Navbar navItems={homeNavItems} />
      <div>
        <div
          style={{ backgroundImage: `url('${check_out}')` }}
          className="w-full h-[300px] bg-no-repeat bg-cover bg-center">
          <div className="w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.4)] flex items-center">
            <h2 className="text-white  text-[45px] font-bold px-6 md:px-24">
              Check Out
            </h2>
          </div>
        </div>
        <div className="w-full my-20 bg-[#f3f3f3] border border-[#e8e8e8] rounded-lg shadow-xl">
          <form
            onSubmit={handleOrderConfirm}
            className="py-8 md:py-16 px-4 md:px-24 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="lg:w-1/2 p-2 bg-white rounded-md border border-gray-400 outline-none"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="lg:w-1/2 p-2 bg-white rounded-md border border-gray-400 outline-none"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <input
                type="text"
                name="phone"
                id="phone"
                className="lg:w-1/2 p-2 bg-white rounded-md border border-gray-400 outline-none"
                placeholder="Your Phone"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={user?.email}
                className="lg:w-1/2 p-2 bg-white rounded-md border border-gray-400 outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="w-full">
              <textarea
                className="w-full  p-2 bg-white rounded-md border border-gray-400 outline-none resize-none"
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"></textarea>
            </div>
            <button className="bg-[#FF3811] w-full py-2 px-4 text-white font-normal rounded-lg focus:border-none">
              Order Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
