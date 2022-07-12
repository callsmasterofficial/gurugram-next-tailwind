import React from "react";
import TrendingNewsCarousel from "./TrendingNewsCarousel";
import TrendingCarouselBottom from "./TrendingCarouselBottom";
import TrendingSidebar from "./TrendingSidebar";
import TrendingSinglePost from "./TrendingSinglePost";

export default function TrendingNewsArea() {
  return (
    <div className="w-[80%]  m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
      <div className="m-5 text-xl font-semibold border-t-2 border-b-2 p-4">
        <h1>Trending News</h1>
      </div>
      <div className="md:grid  md:grid-cols-5 ">
        <div className="trendingCarousel md:col-span-3">
          <div className="mx-2 mt-5 ">
            <TrendingNewsCarousel />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <TrendingCarouselBottom className="" />
            <TrendingCarouselBottom className="" />
          </div>
        </div>
        <div className="md:col-span-2 md:mx-2">
          <TrendingSidebar className="" />
        </div>
      </div>
      </div>
    
  );
}
