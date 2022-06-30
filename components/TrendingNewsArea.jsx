import React from "react";
import TrendingNewsCarousel from "./TrendingNewsCarousel";
import TrendingCarouselBottom from "./TrendingCarouselBottom";
import TrendingSidebar from "./TrendingSidebar";
import TrendingSinglePost from "./TrendingSinglePost";

export default function TrendingNewsArea() {
  return (
    <>
      <div className="m-5 text-xl font-semibold">
        <h1>Trending News</h1>
      </div>
      <div className="md:grid  md:grid-cols-5 ">
        <div className="trendingCarousel md:col-span-3">
          <div className="mx-2 mt-5 bg-green">
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
    </>
  );
}
