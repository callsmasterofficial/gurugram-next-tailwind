import React from "react";
import DateTime from "./DateTime";
import { HomeIcon, Person } from "./icons";

export default function ParticularPost() {
  return (
    <>
      <div className="w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
        {/* Home/tech/dynamic_route */}
        <div className="slugLink flex flex-start my-2 p-2">
          <HomeIcon />
          <span className="text-[12px] ml-2 mr-1 hover:text-red-500">
            <a href="#"> होम /</a>
          </span>
          <span className="text-[12px] ml-1 mr-1 hover:text-red-500">
            <a href="#"> टेक /</a>
          </span>
          <span className="hidden md:inline text-[12px]">
            यहाँ मिल रहा है iPhone 12 पर 27,000 रुपये का डिस्काउंट, मौका ना गवाए
          </span>
        </div>
        {/* Category Tag */}
        <div className="bg-red-500 text-white text-[13px] font-bold w-fit p-2 ml-1 rounded-sm">
          <h4>टेक</h4>
        </div>
        {/* Article Title & sub-title */}
        <div className="FullArticle my-4">
          <div className="articleTitle font-bold text-[25px] md:text-[40px] p-1">
            <h2>
              यहाँ मिल रहा है iPhone 12 पर 27,000 रुपये का डिस्काउंट, मौका ना
              गवाए
            </h2>
          </div>
          <div className="articleSub_title text-[15px] md:text-[25px] text-[#777] p-1">
            <p>
              iPhone 12 पर अब तक का सबसे बड़ा डिस्काउंट मिल रहा है। आइए आपको
              बताते हैं की आपको iPhone 12 कितने का मिलेगा
            </p>
          </div>
        </div>
        {/* Author */}
        <div className="author flex items-center">
            <Person />
            <p className="text-[#333] text-[14px] mx-1 md:text-[18px]">Rahul B.</p>

        </div>
        {/* Date Time */}
        <DateTime />
      </div>
    </>
    // <div className="w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto">
    // </div>
  );
}
