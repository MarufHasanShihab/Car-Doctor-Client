// import slider image
import image_1 from "../../../assets/images/homeCarousel/1.jpg";
import image_2 from "../../../assets/images/homeCarousel/2.jpg";
import image_3 from "../../../assets/images/homeCarousel/3.jpg";
import image_4 from "../../../assets/images/homeCarousel/4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SlideButton from "./SlideButton";

const BannerSlider = () => {
  const banners = [image_1, image_2, image_3, image_4];

  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop>
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-[10px]"
              style={{
                backgroundImage: `url('${img}')`,
              }}>
              <div className="p-6 pl-10 rounded-md w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.4)] flex items-center">
                <div className="space-y-4">
                  <h2 className=" text-4xl max-w-[463px] md:text-6xl font-bold leading-[40px] md:leading-[75px]">
                    Affordable <br /> Price For Car Servicing
                  </h2>
                  <p className="text-base max-w-[522px] font-normal capitalize leading-[30px]">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                  <div className="space-x-3">
                    <button className="py-2 px-4 bg-[#FF3811] rounded-md">
                      Discover More
                    </button>
                    <button className="py-2 px-4 border border-white rounded-md">
                      Latest Project
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-[30px] md:bottom-[40px] right-[40px] md:right-[50px]">
                  <SlideButton />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;
