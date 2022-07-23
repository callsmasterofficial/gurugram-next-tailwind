import React from "react";
import { HomeIcon, VideoIcon } from "./icons";
// import VideoIcon from './icons/VideoIcon';

export default function FixedBottomMobile() {
  return (
    <div className="md:w-[90%]  lg:w-[80%] m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto">
      <div className="bg-black text-white w-[100%] h-[40px] fixed left-0 bottom-0 z-50 grid grid-cols-4">
        <div className="col-span-1 mx-auto text-center p-2 hover:bg-red-500">
          <a href="#">
            <HomeIcon height="1.5rem" width="1.5rem" />
          </a>
        </div>
        <div className="col-span-1 mx-auto text-center p-2 hover:bg-red-500">
          <a href="#">
            <VideoIcon height="1.5rem" width="1.5rem" />
          </a>
        </div>
        <div className="col-span-1 mx-auto text-center p-2 hover:bg-red-500">
          <a href="#">
            <HomeIcon height="1.5rem" width="1.5rem" />
          </a>
        </div>
        <div className="col-span-1 mx-auto text-center p-2 hover:bg-red-500">
          <a href="#">
            <VideoIcon height="1.5rem" width="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
