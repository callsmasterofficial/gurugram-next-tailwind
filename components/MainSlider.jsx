import React from "react";
import Link from "next/link";
import { Videoyt } from "./icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function MainSlider() {
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
  >
      {MainSliderData.map((data) => {
        return (
          <SwiperSlide>
          <div key={data.id} className="w-screen">
            <div className="photoSlider top-6 relative rounded-md">
              <div className="p-0">
                <img
                  src={data.img_src}
                  alt="main photo"
                  className="w-[90%] md:w-[35%] rounded-lg"
                />
              </div>
              <div className="z-10 absolute top-2 right-[15%] md:right-[1%] cursor-pointer">
                <Link href={data.vid_src}>
                  <Videoyt color="red" height="2rem" width="2rem" />
                </Link>
              </div>
              <div className="z-10 absolute bottom-4 bg-gray-700 w-fit md:bg-inherit text-white p-2 md:w-[90%]">
                <h3 className="font-bold">{data.category} / {data.date}</h3>
                <h1>
                  {data.title}
                </h1>
                <p>
                  {data.sub_title}
                </p>
              </div>
            </div>
            {/* <div className="photoGallery">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div> */}
          </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const MainSliderData = [
  {
    id: "1",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  {
    id: "2",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  {
    id: "3",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  {
    id: "4",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  {
    id: "5",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  {
    id: "6",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  {
    id: "7",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  {
    id: "8",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
];
