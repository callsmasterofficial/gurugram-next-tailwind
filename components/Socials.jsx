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
      {/* Facebook */}
      <a href={FACEBOOK} target="_blank">
        <div className="social bg-[#4267B2] flex flex-start items-center p-2 m-2 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap">
          <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
            <Facebook />
          </div>
          <div className="socialFans mx-2 text-xs sm:text-sm lg:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Twitter  */}
      <a href={TWITTER} target="_blank">
        <div className="social bg-[#1DA1F2] flex flex-start items-center p-2 m-2 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap ">
          <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
            <Twitter />
          </div>
          <div className="socialFans mx-2 text-xs sm:text-sm lg:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Instagram  */}
      <a href={INSTAGRAM} target="_blank">
        <div className="social instagram flex flex-start items-center p-2 m-2 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap ">
          <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
            <Instagram />
          </div>
          <div className="socialFans mx-2 text-xs sm:text-sm lg:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Youtube  */}
      <a href={YOUTUBE} target="_blank">
        <div className="social bg-[#FF0000] flex flex-start items-center p-2 m-2 rounded-md  md:justify-center  md:flex-wrap lg:flex-nowrap ">
          <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
            <Youtube />
          </div>
          <div className="socialFans mx-2 text-xs sm:text-sm lg:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Telegram  */}
      <a href={TELEGRAM} target="_blank">
        <div className="social bg-[#31a8e0] flex flex-start items-center p-2 m-2 rounded-md md:justify-center  md:flex-wrap lg:flex-nowrap ">
          <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
            <Telegram />
          </div>
          <div className="socialFans mx-2 text-xs sm:text-sm lg:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Whatsapp  */}
      <a href={WHATSAPP} target="_blank">
        <div className="social bg-green-400 flex flex-start items-center p-2 m-2 rounded-md md:justify-center   md:flex-wrap lg:flex-nowrap ">
          <div className="socialLogo md:mb-2 lg:mb-0 lg:ml-2">
            <Whatsapp />
          </div>
          <div className="socialFans mx-2 text-xs sm:text-sm lg:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
    </div>
  );
}

