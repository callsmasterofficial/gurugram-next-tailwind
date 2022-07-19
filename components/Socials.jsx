import React from "react";
import {
  FACEBOOK,
  TWITTER,
  INSTAGRAM,
  YOUTUBE,
  TELEGRAM,
  WHATSAPP,
} from "../constants/socialMedia";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Telegram,
  Whatsapp,
} from "./icons";
export default function Socials() {
  return (
    <div className="grid grid-cols-3 text-white">
      <div>
        {/* Facebook */}
        <a href={FACEBOOK} target="_blank">
          <div className="social bg-[#4267B2] flex flex-col sm:flex-row text-center justify-center items-center p-2 mr-2 mb-2 md:mr-0 md:mb-0 md:m-2 md:mt-1 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap">
            <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
              <Facebook />
            </div>
            <div className=" mx-2 text-xs sm:text-sm lg:mx-4 mt-2">
              <h4 className="font-bold">34,456</h4>
              <p className="text-[10px]">Followers</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        {/* Twitter  */}
        <a href={TWITTER} target="_blank">
          <div className="social bg-[#1DA1F2] flex flex-col sm:flex-row text-center justify-center items-center p-2 mx-[2px] mb-2 md:mr-0 md:mb-0 md:m-2  md:mt-1 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap ">
            <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
              <Twitter />
            </div>
            <div className=" mx-2 text-xs sm:text-sm lg:mx-4 mt-2">
              <h4 className="font-bold">34,456</h4>
              <p className="text-[10px]">Followers</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        {/* Instagram  */}
        <a href={INSTAGRAM} target="_blank">
          <div className="social instagram flex flex-col sm:flex-row text-center justify-center items-center p-2 ml-2 mb-2 md:mr-0 md:mb-0 md:m-2  md:mt-1 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap ">
            <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
              <Instagram />
            </div>
            <div className=" mx-2 text-xs sm:text-sm lg:mx-4 mt-2">
              <h4 className="font-bold">34,456</h4>
              <p className="text-[10px]">Followers</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        {/* Youtube  */}
        <a href={YOUTUBE} target="_blank">
          <div className="social bg-[#FF0000] flex flex-col sm:flex-row text-center justify-center items-center p-2 mr-2 mb-2 md:mr-0 md:mb-0 md:m-2  md:mt-1 rounded-md  md:justify-center  md:flex-wrap lg:flex-nowrap">
            <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
              <Youtube />
            </div>
            <div className=" mx-2 text-xs sm:text-sm lg:mx-4 mt-2">
              <h4 className="font-bold">34,456</h4>
              <p className="text-[10px]">Subscribers</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        {/* Telegram  */}
        <a href={TELEGRAM} target="_blank">
          <div className="social bg-[#31a8e0] flex flex-col sm:flex-row text-center justify-center items-center p-2 mx-[2px] mb-2 md:mr-0 md:mb-0 md:m-2  md:mt-1 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap ">
            <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
              <Telegram />
            </div>
            <div className=" mx-2 text-xs sm:text-sm lg:mx-4 mt-2">
              <h4 className="font-bold">34,456</h4>
              <p className="text-[10px]">Fans</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        {/* Whatsapp  */}
        <a href={WHATSAPP} target="_blank">
          <div className="social bg-green-400 flex flex-col sm:flex-row text-center justify-center items-center p-2 ml-2 mb-2 md:mr-0 md:mb-0 md:m-2  md:mt-1 rounded-md md:justify-center md:flex-wrap lg:flex-nowrap ">
            <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
              <Whatsapp />
            </div>
            <div className=" mx-2 text-xs sm:text-sm lg:mx-4 mt-2">
              <h4 className="font-bold">34,456</h4>
              <p className="text-[10px]">Community</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

