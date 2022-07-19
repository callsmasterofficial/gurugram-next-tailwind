import React from "react";
import { Facebook, Twitter } from "./icons";

export default function SocialSharing() {
  return (
    <div className="flex">
      <div className="mr-2 p-2 bg-[#4267B2]  cursor-pointer">
        <Facebook color="white"/>
      </div>
      <div className="mr-2 p-2 bg-[#31a8e0] cursor-pointer">
        <Twitter color="white"/>
      </div>
      <div className="mr-2 p-2 bg-red-500 cursor-pointer">
        <Facebook color="white"/>
      </div>
      <div className="mr-2 p-2 bg-red-500 cursor-pointer">
        <Twitter color="white"/>
      </div>
      <div className="mr-2 p-2 bg-red-500 cursor-pointer">
        <Facebook color="white"/>
      </div>
      <div className="mr-2 p-2 bg-red-500 cursor-pointer">
        <Twitter color="white"/>
      </div>
      
    </div>
  );
}
