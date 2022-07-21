import React from "react";
import { Facebook, Reddit, Twitter, LinkedIn, Tumblr, Pinterest } from "./icons";

export default function SocialSharing() {
  return (
    <div className="flex">
      <div className="mr-2 p-2 bg-[#4267B2]  cursor-pointer">
        <Facebook color="white"/>
      </div>
      <div className="mr-2 p-2 bg-[#31a8e0] cursor-pointer">
        <Twitter color="white"/>
      </div>
      <div className="mr-2 p-2 bg-[#0077b5] cursor-pointer">
        <LinkedIn color="white"/>
      </div>
      <div className="mr-2 p-2 bg-[#34526f] cursor-pointer">
        <Tumblr color="white"/>
      </div>
      <div className="mr-2 p-2 bg-[#E60023] cursor-pointer">
        <Pinterest color="white"/>
      </div>
      <div className="mr-2 p-2 bg-[#ff4500] cursor-pointer">
        <Reddit color="white"/>
      </div>
      
    </div>
  );
}
