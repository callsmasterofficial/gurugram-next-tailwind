import React from "react";
import NewSocials from "./NewSocials";
import NewTWeather from "./NewTWeather";
import ParticularRelatedPopular from "./ParticularRelatedPopular";
import TazaKhabar from "./TazaKhabar";

export default function ParticularPostSidebar() {
  return (
    <div className="m-auto border-2 mt-2 md:m-[8px] md:mt-0">
      {/* New Socials */}
      <div className="">
        <NewSocials />
      </div>
      
      {/* Weather --- NewTWeather */}
      <div className="my-5 p-3 ">
        <NewTWeather />
      </div>

      {/* Related */}
      <div className="p-3">
        <ParticularRelatedPopular />
      </div>

      {/* Taza Khabhar */}
      <div className="p-3">
        <TazaKhabar />
      </div>
    </div>
  );
}
