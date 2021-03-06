import React from "react";
import TrendingNewsCarousel from "./TrendingNewsCarousel";
import TrendingCarouselBottom from "./TrendingCarouselBottom";
import TrendingSidebar from "./TrendingSidebar";
import TrendingSinglePost from "./TrendingSinglePost";

export default function TrendingNewsArea() {
  return (

    <div className="w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">

      <div className=" text-xl font-semibold border-t-2 border-b-2 p-2 mt-10 sm:mt-20">


        <h1>Trending News</h1>
      </div>
      <div className="md:grid  md:grid-cols-5 border-l-2 border-r-2 border-b-2 p-2">
        <div className="trendingCarousel md:col-span-3 ">
          <div className="md:mt-[-20px]">
            <TrendingNewsCarousel />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <TrendingCarouselBottom className="" />
            <TrendingCarouselBottom className="" />
          </div>
        </div>
        <div className="md:col-span-2">
          <TrendingSidebar className="" />
        </div>
      </div>
      </div>
    
  );
}
