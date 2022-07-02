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
        <div className="social bg-[#4267B2] flex flex-start items-center p-2 m-2 rounded-md md:justify-center">
          <div className="logo ">
            <Facebook />
          </div>
          <div className="mx-2 text-sm md:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Twitter  */}
      <a href={TWITTER} target="_blank">
        <div className="social bg-[#1DA1F2] flex flex-start items-center p-2 m-2 rounded-md md:justify-center">
          <div className="logo ">
            <Twitter />
          </div>
          <div className="mx-2 text-sm md:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Instagram  */}
      <a href={INSTAGRAM} target="_blank">
        <div className="social instagram flex flex-start items-center p-2 m-2 rounded-md md:justify-center">
          <div className="logo ">
            <Instagram />
          </div>
          <div className="mx-2 text-sm md:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Youtube  */}
      <a href={YOUTUBE} target="_blank">
        <div className="social bg-[#FF0000] flex flex-start items-center p-2 m-2 rounded-md  md:justify-center">
          <div className="logo ">
            <Youtube />
          </div>
          <div className="mx-2 text-sm md:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Telegram  */}
      <a href={TELEGRAM} target="_blank">
        <div className="social bg-[#31a8e0] flex flex-start items-center p-2 m-2 rounded-md md:justify-center">
          <div className="logo">
            <Telegram />
          </div>
          <div className="mx-2 text-sm md:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
      {/* Whatsapp  */}
      <a href={WHATSAPP} target="_blank">
        <div className="social bg-green-400 flex flex-start items-center p-2 m-2 rounded-md ">
          <div className="logo">
            <Whatsapp />
          </div>
          <div className="mx-2 text-sm md:mx-4">
            <h4 className="font-bold">34,456</h4>
            <p>Fans</p>
          </div>
        </div>
      </a>
    </div>
  );
}

{
  /* <div className="trending-social">
        <div className="section-title">
          <h3 className="title">Follow us</h3>
        </div>
        <ul>
          <li>
            <a href="#">
              <Facebook color="white" />
              <span>34,456</span>
              <p>Fans</p>
            </a>
          </li>
          <li>
            <a className="item-2" href="#">
              <Twitter />
              <span>34,456</span>
              <p>Followers</p>
            </a>
          </li>
          <li>
            <a className="item-3" href="#">
              <Youtube />
              <span>34,456</span>
              <p>Subscribers</p>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="item-4" href="#">
              <Instagram />
              <span>34,456</span>
              <p>Followers</p>
            </a>
          </li>
          <li>
            <a className="item-5" href="#">
              <Telegram />
              <span>34,456</span>
              <p>Followers</p>
            </a>
          </li>
          <li>
            <a className="item-6" href="#">
              <Whatsapp />
              <span>34,456</span>
              <p>Fans</p>
            </a>
          </li>
        </ul>
      </div> */
}
