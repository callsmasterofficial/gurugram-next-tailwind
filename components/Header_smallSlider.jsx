import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Header_smallSlider() {
  
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
      // when window width is >= 640px
      460: {
        width: 640,
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 2,
        spaceBetween:100,
      },
    }}
  >
      {Header_smallSliderData.map((data) => {
        return (
          <SwiperSlide>
          <div key={data.id} className="flex w-screen rounded-lg">
            <div className="flex flex-col md:flex-row items-center p-4">
              <img
                src={data.img_src}
                alt="small slider"
                className="w-[20%] sm:w-[25%] md:w-[30%] mx-2 rounded-md"
              />
              <div className="">
                <h1 className="text-lg font-bold sm:text-sm sm:font-bold md:text-sm md:font-bold">
                  {data.title}
                </h1>
                <p className="text-sm sm:text-sm md:text-sm">
                  {data.sub_title}
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const Header_smallSliderData = [
  {
    id: "1",
    img_src: "./assets/images/post-1.jpg",
    title: "The Home Decoration Document: Photo...",
    sub_title: "People have been infected in USA...",
  },
  {
    id: "2",
    img_src: "./assets/images/post-2.jpg",
    title: "U.S. Response Subash Says He Will Label Regiions By Risk Of...",
    sub_title: "People have been infected in USA...",
  },
  {
    id: "3",
    img_src: "./assets/images/post-3.jpg",
    title: "Stimuli Package Fundamentally Transform The Government",
    sub_title: "People have been infected in USA...",
  },
  {
    id: "4",
    img_src: "./assets/images/post-2.jpg",
    title: "U.S. Response Subash Says He Will Label Regiions By Risk Of...",
    sub_title: "People have been infected in USA...",
  },
];
