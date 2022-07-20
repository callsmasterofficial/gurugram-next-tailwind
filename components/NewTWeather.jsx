import React from "react";
import DateTime from "./DateTime";
import { Chat } from "./icons";

export default function NewTWeather() {
  return (
    <>
      <div className="border-2 p-2 relative">
        {/* Image via global CSS */}
        <div className=" weatherbgImage h-52"></div>
        <div className="absolute bottom">
          {/* Place */}
          <div className="w-[100%] text-[28px] font-bold text-center mb-4">
            <p>Delhi</p>
            <div className="text-[8px]">
              <DateTime />
            </div>
          </div>

          {/* temp & other details  */}
          <div className="flex flex-wrap items-center">
            <div className="mx-auto flex flex-col items-center p-2">
              <div>
                <Chat />
              </div>
              <p className="text-[36px]">21<sup>°</sup>c</p>
            </div>
            <div className="mx-auto p-2">
              <p>39°-27°</p>
              <p>56%</p>
              <p>5.14 km/h</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
