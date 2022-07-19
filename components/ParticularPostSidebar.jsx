import React from "react";
import Socials from "./Socials";
import WeatherCard from "./WeatherCard";
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar";
import TazaKhabar from "./TazaKhabar";

export default function ParticularPostSidebar() {
  return (
    <div className="">
      <div className="mt-2 socialDiv">
        <Socials />
      </div>
      <div className="">
        <WeatherCard />
      </div>
      <div className="m-2 mt-10 md:mt-5">
        <MainRelatedPopularSidebar />
      </div>
      <div>
        <TazaKhabar />
      </div>
    </div>
  );
}
