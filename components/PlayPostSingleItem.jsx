import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function PlayPostSingleItem() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
      // spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 460px
        460: {
          width: 460,
          slidesPerView: 1,
          spaceBetween: 50,
        },
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          width: 768,
          slidesPerView: 2,
          spaceBetween: 400,
        },
      }}
      navigation
      autoplay
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
    >
      {PlayPostData.map((data) => {
        return (
          <SwiperSlide>
            <div className="relative">
              <div className="sm:w-[20rem] md:w-[540px] md:h-[420px]">
                <img src={data.img_src} alt="" className=""  />
              </div>
              <div className="description absolute text-white sm:w-96 font-bold bottom-1 left-1 md:bottom-3 md:left-3 md:text-xl">
                <div className="dateCategory text-sm md:text-base flex">
                    <p className="">{data.category}</p>
                    <p>{" / "}</p>
                    <p className="">{data.date}</p>
                </div>
                <div className="title">
                    <h2>{data.title}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const PlayPostData = [
  {
    id: "1",
    img_src: "./assets/images/play-post-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
  {
    id: "2",
    img_src: "./assets/images/play-post-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
  {
    id: "3",
    img_src: "./assets/images/play-post-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
];
