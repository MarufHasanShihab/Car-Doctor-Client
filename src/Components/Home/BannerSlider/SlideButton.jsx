import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export default function SlideButton() {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-6">
      <button
        onClick={() => swiper.slidePrev()}
        className=" w-10 h-10 bg-white/20 rounded-full">
        <FaArrowLeft className="mx-auto" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" w-10 h-10 bg-[#FF3811] rounded-full mx-auto">
        <FaArrowRight className="mx-auto" />
      </button>
    </div>
  );
}
