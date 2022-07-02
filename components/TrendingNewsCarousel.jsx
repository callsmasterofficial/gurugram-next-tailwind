import { data } from "autoprefixer";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function TrendingNewsCarousel() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
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
            spaceBetween: 50,
          },
        }}
      >
        {TrendingNewsCarouselData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div key={data.id} className="lg:mx-auto">
                <div className="trendingNewsCarousel w-[350px] mx-auto sm:w-[400px] sm:items-center">
                  <img src={data.img_src} alt="trending" className="" />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="inline text-lg font-bold">
                    <a href="#" className="text-[#1da1f2]">
                      {data.category}
                    </a>
                    <span>{" / "}</span>
                    <span>{data.date}</span>
                  </div>

                  <h3 className="">
                    <a href="#">{data.title}</a>
                  </h3>
                  <p className="">{data.sub_title}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const TrendingNewsCarouselData = [
  {
    id: "1",
    img_src: "./assets/images/trending-news-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    sub_title:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "2",
    img_src: "./assets/images/trending-news-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    sub_title:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
  {
    id: "3",
    img_src: "./assets/images/trending-news-3.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title:
      "Japan’s virus success has puzzled the world. Is its luck running out?",
    sub_title:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
  },
];
