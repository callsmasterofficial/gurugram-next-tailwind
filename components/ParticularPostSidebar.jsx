import React from "react";
import NewSocials from "./NewSocials";
import WeatherCard from "./WeatherCard";
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar";
import TazaKhabar from "./TazaKhabar";

export default function ParticularPostSidebar() {
  return (
    <div className="m-auto border-2">
      {/* New Socials */}
      <div className="">
        <NewSocials />
      </div>
      
    </div>
  );
}
