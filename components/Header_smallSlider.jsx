
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
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: true,
      responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
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
        {Header_smallSliderData.map((data) => {
           return (
          <div key={data.id} className="relative">
            <div className="p-1">
              <img className="object-contain imageFix" src="https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="newFormat" />
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



const Header_smallSliderData = [
  {
    id: "1",
    img_src: "./assets/images/gallery-post/1.png",
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

// /*



// Updated till 7th July 2022, 04:22 pm
// <Swiper
//         // install Swiper modules
//         modules={[Navigation, Autoplay]}
//         // spaceBetween={50}
//         slidesPerView={1}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         // navigation
//         autoplay={true}
//         // loop={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         // loop={true}
//       >
//         {" "}
//         <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div>
//         {Header_smallSliderData.map((data) => {
//           return (
//             <SwiperSlide key={data.id} className="mt-2">
//               <div className="smallSlider p-4">
//                 <div className=" sm:float-left md:mx-2">
//                   <img src={data.img_src} alt="slider items" className="w-[110px] h-[67px]" />
//                 </div>
//                 <div className="mx-auto">
//                   <p className="text-[9px] lg:text-[14px]">{data.title}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>


// Updated till 7th July 2022, 12:22 pm

// <div className="w-[80%]  m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Autoplay]}
//         // spaceBetween={50}
//         slidesPerView={4}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         // navigation
//         autoplay={true}
//         loop={true}
//       >
//         {" "}
//         <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div>
//         {Header_smallSliderData.map((data) => {
//           return (
//             <SwiperSlide key={data.id} className="border-4">
//               <div className="smallSlider bg-red-200">
//                 <div>
//                   <img src={data.img_src} alt="slider items" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>

// */
