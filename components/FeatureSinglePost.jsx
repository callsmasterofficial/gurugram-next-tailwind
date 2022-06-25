import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function FeatureSinglePost() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    breakpoints={{
      // when window width is >= 640px
      460: {
        width: 460,
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 2,
      
      },
    }}
    navigation
    autoplay
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
      {/* <SwiperSlide> */}
        {FeatureSinglePostData.map((data) => {
          return (
            <SwiperSlide>
            <div key={data.id} className="relative overflow-hidden">
              <div className="w-screen md:w-[100%]">
                <img src={data.img_src} alt="" className="w-[90%] rounded-md m-2" />
              </div>
              <div className="z-10 mx-2 absolute font-bold bottom-3 left-2 text-white bg-gray-800 w-[91%] opacity-60 md:bg-inherit md:opacity-95 rounded-md p-2">
                <h4 className="text-lg">{data.category} / {data.date}</h4>
                <h2 className="text-md">{data.title}</h2>
              </div>
            </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  )
}

const FeatureSinglePostData = [
    {
      id: "1",
      img_src: "./assets/images/feature-1.jpg",
      category: "Technology",
      date: "June 24, 2022",
      title: "Copa America: Luis Suarez from devastated US",
    },
    {
      id: "2",
      img_src: "./assets/images/feature-2.jpg",
      category: "Technology",
      date: "June 24, 2022",
      title: "Nancy Zhang a Chinese busy woman and Dhaka",
    },
    {
      id: "3",
      img_src: "./assets/images/feature-3.jpg",
      category: "Technology",
      date: "June 24, 2022",
      title: "U.S. Response subash says he will label regiions by rish of...",
    },
    {
      id: "4",
      img_src: "./assets/images/feature-4.jpg",
      category: "Technology",
      date: "June 24, 2022",
      title: "Venezuela elan govt and opposit the property collect",
    },
    {
      id: "5",
      img_src: "./assets/images/feature-1.jpg",
      category: "Technology",
      date: "June 24, 2022",
      title: "Cheap smartphone sensor could help you old food safe",
    },
  ];