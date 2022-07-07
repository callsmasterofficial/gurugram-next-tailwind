import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function Header_smallSlider() {
  return (
    <div className="w-[80%]  m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // navigation
        autoplay={true}
        // loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // 768: {
          //   slidesPerView: 3,
          //   spaceBetween: 2,
          // },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        // loop={true}
      >
        {" "}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {Header_smallSliderData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="smallSizeSlide mt-2">
              <div className="smallSlider p-4 lg:p-0 lg:grid lg:grid-cols-2">
                <div className="smallSizeImgbox sm:float-left sm:mx-2 lg:mx-0 lg:col-span-1">
                  <img src={data.img_src} alt="slider items" className="w-[180px] h-[87px] sm:w-[110px] sm:h-[67px]" />
                </div>
                <div className="mx-auto lg:col-span-1 ">
                  <p className="text-center sm:text-start text-[14px] lg:text-[14px]">{data.title}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
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
  {
    id: "5",
    img_src: "./assets/images/post-1.jpg",
    title: "The Home Decoration Document: Photo...",
    sub_title: "People have been infected in USA...",
  },
  {
    id: "6",
    img_src: "./assets/images/post-2.jpg",
    title: "U.S. Response Subash Says He Will Label Regiions By Risk Of...",
    sub_title: "People have been infected in USA...",
  },
  {
    id: "7",
    img_src: "./assets/images/post-3.jpg",
    title: "Stimuli Package Fundamentally Transform The Government",
    sub_title: "People have been infected in USA...",
  },
  {
    id: "8",
    img_src: "./assets/images/post-2.jpg",
    title: "U.S. Response Subash Says He Will Label Regiions By Risk Of...",
    sub_title: "People have been infected in USA...",
  },
];

/*



Updated till 7th July 2022, 04:22 pm
<Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // navigation
        autoplay={true}
        // loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // loop={true}
      >
        {" "}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {Header_smallSliderData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="mt-2">
              <div className="smallSlider p-4">
                <div className=" sm:float-left md:mx-2">
                  <img src={data.img_src} alt="slider items" className="w-[110px] h-[67px]" />
                </div>
                <div className="mx-auto">
                  <p className="text-[9px] lg:text-[14px]">{data.title}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>


Updated till 7th July 2022, 12:22 pm

<div className="w-[80%]  m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        // spaceBetween={50}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // navigation
        autoplay={true}
        loop={true}
      >
        {" "}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {Header_smallSliderData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="border-4">
              <div className="smallSlider bg-red-200">
                <div>
                  <img src={data.img_src} alt="slider items" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>

*/
