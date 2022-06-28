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

export default function FeatureSinglePost() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 460px
        460: {
          width: 460,
          slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 3,
        },
        768: {
          width: 768,
          slidesPerView: 4,
        },
      }}
      navigation
      autoplay
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {/* <SwiperSlide> */}
      {FeatureSinglePostData.map((data) => {
        return <SwiperSlide>
                    <div key={data.id} className="feature-post">
                        <div className="feature-post-thumb ml-3 mr-0 ">
                            <img src={data.img_src} alt="feature post" />
                        </div>
                        <div className="feature-post-content">
                            <div className="post-meta ">
                                <div className="meta-categories">
                                    <a href="#">{data.category}</a>
                                </div>
                                <div className="meta-date">
                                    <span>{data.date}</span>
                                </div>
                            </div>
                            <h4 className="title"><a href="#">{data.title}</a></h4>
                        </div>
                    </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
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
