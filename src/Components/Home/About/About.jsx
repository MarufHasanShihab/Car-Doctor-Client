import about_img from "../../../assets/images/about_us/about.png";

const About = () => {
  return (
    <div id="About" className="my-28 flex flex-col lg:flex-row gap-4 px-8 lg:px-0">
      <div className="lg:w-1/2">
      <img src={about_img} alt="about_img" className="w-[500px]" />
      </div>
      <div className="lg:w-1/2 space-y-4">
        <p className="text-[#FF3811] font-bold text-xl">About Us</p>
        <h2 className="max-w-[376px] text-[#151515] text-[25px] md:text-[45px] font-bold">We are qualified & of experience in this field</h2>
        <p className="max-w-[480px] capitalize text-[14px] sm:text-base font-normal leading-[26px] text-neutral-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&lsquo;t look even slightly
          believable.
        </p>
        <p className="max-w-[485px] capitalize text-[14px] sm:text-base font-normal leading-[26px] text-neutral-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&lsquo;t look even slightly
          believable.
        </p>
        <button className="py-2 px-4 bg-[#FF3811] text-white rounded-md">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
