



import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../components/icons/LeftArrow"
import RightArrow from "../components/icons/RightArrow"

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: true,
      responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        }
                    }
                    ]
    };
    return (
      // <div className="overflow-hidden">
    <div className="w-[80%] relative  m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto overflow-hidden">
        <h2 className="w-5 h-5"></h2>
        <div className="">
          <button className="mx-1 p-[3px] transition-all absolute z-10 left-0 top-[50%] bg-black rounded-full text-white" onClick={this.previous}>
            <LeftArrow color="white" width="1.5rem" height="1.5rem" />
          </button>
          <button className="mx-1 p-[3px] transition-all absolute z-10 right-0 top-[50%] bg-black rounded-full text-white" onClick={this.next}>
            <RightArrow color="white" width="1.5rem" height="1.5rem" />
          </button>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
        {TrendingNewsCarouselData.map((data) => {
           return (
          <div key={data.id} className="relative">
            <div className="p-1">
              <img className="object-cover TrendingImageFix" src={data.img_src} alt="newFormat" />
            </div>
            <div className="absolute bottom-2 left-2 text-white ml-6 mr-6 titleFix">
              <p>{data.title}</p>
            </div>
          </div>
           );
        })}
          
        </Slider>
        
      </div>
    );
  }
}








// import { data } from "autoprefixer";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/autoplay";

// export default function TrendingNewsCarousel() {
//   return (
//     <>
//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//         spaceBetween={50}
//         slidesPerView={1}
//         navigation
//         autoplay
//         pagination={{
//           el: ".swiper-pagination",
//           clickable: true,
//         }}
//         scrollbar={{ draggable: true }}
//         breakpoints={{
//           // when window width is >= 640px
//           460: {
//             width: 640,
//             slidesPerView: 1,
//           },
//           // when window width is >= 768px
//           768: {
//             width: 768,
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//         }}
//       >
//         {TrendingNewsCarouselData.map((data) => {
//           return (
//             <SwiperSlide key={data.id}>
//               <div key={data.id} className="trending-post lg:mx-auto">
//                 <div className="trendingNewsCarousel  w-[350px] mx-auto sm:w-[400px] sm:items-center">
//                   <img src={data.img_src} alt="trending" className="" />
//                 </div>
//                 <div className="p-5 flex flex-col justify-center">
//                   <div className="inline text-lg font-bold">
//                     <a href="#" className="text-[#1da1f2]">
//                       {data.category}
//                     </a>
//                     <span>{" / "}</span>
//                     <span>{data.date}</span>
//                   </div>

//                   <h3 className="">
//                     <a href="#">{data.title}</a>
//                   </h3>
//                   <p className="">{data.sub_title}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </>
//   );
// }

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
