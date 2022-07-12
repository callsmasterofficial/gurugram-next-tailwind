import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../components/icons/LeftArrow";
import RightArrow from "../components/icons/RightArrow";

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
      // dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1380,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      // <div className="overflow-hidden">
      <div className="relative">
        <h2 className="w-5 h-5"></h2>
        <div className="">
          <button
            className="mx-1 p-[3px] transition-all absolute z-10 left-0 top-[50%]  bg-black rounded-full text-white"
            onClick={this.previous}
          >
            <LeftArrow color="white" width="1.5rem" height="1.5rem" />
          </button>
          <button
            className="mx-1 p-[3px] transition-all absolute z-10 right-0 top-[50%] bg-black rounded-full text-white"
            onClick={this.next}
          >
            <RightArrow color="white" width="1.5rem" height="1.5rem" />
          </button>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
        {FeatureSinglePostData.map((data) => {
          return (
              <div key={data.id} className="relative">
                <div className="p-1 featureImageFix">
                  <img className="" src={data.img_src} alt="newFormat" />
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
  {
    id: "6",
    img_src: "./assets/images/feature-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Copa America: Luis Suarez from devastated US",
  },
  {
    id: "7",
    img_src: "./assets/images/feature-2.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Nancy Zhang a Chinese busy woman and Dhaka",
  },
  {
    id: "8",
    img_src: "./assets/images/feature-3.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "U.S. Response subash says he will label regiions by rish of...",
  },
  {
    id: "9",
    img_src: "./assets/images/feature-4.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Venezuela elan govt and opposit the property collect",
  },
  {
    id: "10",
    img_src: "./assets/images/feature-1.jpg",
    category: "Technology",
    date: "June 24, 2022",
    title: "Cheap smartphone sensor could help you old food safe",
  },
];
