import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Header_smallSlider() {
  
  return (
        <div className="w-[80%]  m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
    <Swiper

    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay    
    pagination={{
      el: ".swiper-pagination", 
      clickable: true 
    }}
    scrollbar={{ draggable: true }}
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
          <SwiperSlide key={data.id} >
         
          <div className="flex flex-wrap rounded-md">
            <div className="flex md:flex-row items-center p-2">
              <img
                src={data.img_src}
                alt="small slider"
                className="w-[20%] sm:w-[25%] mr-1 md:w-[30%] md:mx-2 rounded-md"
              />
              <div className="flex flex-col justify-self-center align-middle items-baseline">
                <h3 className="text-xs md:text-base ">
                  {data.title}
                </h3>
                {/* <p className="text-sm sm:text-sm md:text-sm">
                  {data.sub_title}
                </p> */}
              </div>
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
];

