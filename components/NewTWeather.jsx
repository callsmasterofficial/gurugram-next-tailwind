import React from "react";
import DateTime from "./DateTime";
import { IndiaGate, Precipitation, Wind } from "./icons";
// import indiaGateImg from "../public/assets/images/indiaGateImg.svg"
// import weatherImage from "../public/assets/images/indiaGate.png"

export default function NewTWeather() {
  return (
    <div className="">
      <div className="border-2 relative">
        {/* Place */}
        <div className=" p-2 text-[12px] text-center z-50">
          <div className="fontModak font-bold text-[16px]">
            <p>दिल्ली</p>
          </div>
          <div className="">
            <DateTime />
          </div>
        </div>
        <div className="">
          <img
            src="../../assets/images/indiaGateClouds.jpg"
            alt=""
            className="w-[100%] h-[100%] overflow-hidden"
          />
        </div>
        <div>
          {/* Temperature  */}
          <div className=" flex items-center text-center absolute bottom-12 left-3 right-3">
            <p className="w-fit mx-auto rounded-full text-[12px] font-bold md:hidden lg:block">
              22°c
            </p>
            <p className="w-fit mx-auto rounded-full text-[50px] font-bold ">
              27<span className="text-[32px]">°c</span>
            </p>
            <p className="w-fit mx-auto rounded-full text-[12px] font-bold md:hidden lg:block">
              37°c
            </p>
          </div>

          {/* min-max AND precipitation */}
          <div className="flex justify-between absolute bottom-1 p-2 left-3 right-3">
            <div className="precipitation flex flex-col items-center p-2 rounded-2xl md:mr-2">
              <Precipitation />
              <p className="text-[12px] md:text-[16px]">56%</p>
            </div>
            <div className="wind flex flex-col items-center p-2 rounded-2xl  md:mx-2">
              <Wind />
              <p className="text-[12px] md:text-[16px]">5km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
