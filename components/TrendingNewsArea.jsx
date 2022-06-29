import React from "react";
import TrendingNewsCarousel from "./TrendingNewsCarousel";
import TrendingCarouselBottom from "./TrendingCarouselBottom";
import TrendingSidebar from "./TrendingSidebar";
import TrendingSinglePost from "./TrendingSinglePost";

export default function TrendingNewsArea() {
  return (
        <div className="">
            <div className="m-5 text-xl font-semibold">
                <h1>Trending News</h1>
            </div>
            <div className="flex justify-center mx-2 mt-5">
                <TrendingNewsCarousel />
            </div>
            <div className="md:grid md:grid-cols-2">
                <TrendingCarouselBottom />
                <TrendingCarouselBottom />
            </div>
        </div>
  );
}
