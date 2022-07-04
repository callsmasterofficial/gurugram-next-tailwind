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
        slidesPerView={1}
        spaceBetween={30}
        // slidesPerGroup={3}
        // loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
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
        autoplay
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {PlayPostData.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <div className="relative">
              <div className="">
                <img src={data.img_src} alt="" className=""  />
              </div>
              <div className="description absolute text-white bottom-1 left-1">
                <div className="dateCategory">
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
  {
    id: "4",
    img_src: "./assets/images/play-post-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
  {
    id: "5",
    img_src: "./assets/images/play-post-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
  {
    id: "6",
    img_src: "./assets/images/play-post-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
  {
    id: "7",
    img_src: "./assets/images/play-post-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
  {
    id: "8",
    img_src: "./assets/images/play-post-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
  {
    id: "9",
    img_src: "./assets/images/play-post-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Success is not a good food failure makes you humble",
  },
];
