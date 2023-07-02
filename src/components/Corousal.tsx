"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-fade";
import "../styles/corousal.css";

type Props = {
  corousalItems: {
    title: string;
    description?: string;
    imgUrl: string;
  }[];
};

const Corousal = ({ corousalItems }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      spaceBetween={100}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {corousalItems.map((item, index) => {
        return (
          <SwiperSlide className="w-full relative h-full" key={index}>
            {/* <div className="   "> */}
              <Image  className="lg:px-28 max-md:h-[80%] max-md:w-[95%] object-cover absolute top-0 left-0 " src={item.imgUrl} height={700} width={1400} alt="img" />
              <h2 className="corousal-title  text-5xl md:text-8xl md:w-[43rem] w-[80%] text-right    bottom-16 md:bottom-0 right-5   md:right-0  absolute">
                {item.title}
              </h2>
            {/* </div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Corousal;
