import React from "react";
import NewSocials from "./NewSocials";
import NewTWeather from "./NewTWeather";
import WeatherCard from "./WeatherCard";
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar";
import TazaKhabar from "./TazaKhabar";

export default function ParticularPostSidebar() {
  return (
    <div className="m-auto border-2 mt-2 md:m-[8px] md:mt-0">
      {/* New Socials */}
      <div className="">
        <NewSocials />
      </div>
      
      {/* Weather --- NewTWeather */}
      <div className="">
        <NewTWeather />
      </div>
    </div>
  );
}
