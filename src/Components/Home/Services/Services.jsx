import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json()) // This expects JSON
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div id="Services" className="px-8 lg:px-0">
      <div className="text-center">
        <p className="text-[#ff3811] text-xl font-bold ">Service</p>
        <h2 className="text-[#151515] text-[45px] font-bold ">
          Our Service Area
        </h2>
        <p className="max-w-[717px] mx-auto text-neutral-500 text-base font-normal capitalize leading-[30px]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&lsquo;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {
            services?.map(service => <ServiceCard key={service._id} service={service}/>)
        }
      </div>
      <div className="flex justify-center my-12">
      <button className="py-2 px-4 text-[#ff3811] border border-[#ff3811]">More Services</button>
      </div>
    </div>
  );
};

export default Services;
