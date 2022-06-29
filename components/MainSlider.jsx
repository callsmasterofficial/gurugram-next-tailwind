import React from "react";
import { Videoyt } from "./icons";

export default function MainSlider() {
  return (
    <>
      {MainSliderData.map((data) => {
        return (
          <div key={data.id} className="post_gallery_play md:rounded-md md:mr-5">
            <div className="bg-image"></div>
            <div className="post__gallery_play_content">
              <div className="post-meta">
                <div className="meta-categories">
                  <a href="#">{data.category}</a>
                </div>
                <div className="meta-date">
                  <span>{data.date}</span>
                </div>
              </div>
              <h2 className="title">
                <a href="#">
                  {data.title}
                </a>
              </h2>
              <p>
                {data.sub_title}
              </p>
            </div>
            <div className="post_play_btn">
              <a
                className="video-popup"
                href={data.vid_src}
                
              >
                <div className="post_play_btn bg-red-500 w-14 h-14 items-center justify-center flex rounded-full">
                  <Videoyt width="30px" height="30px"/>
                </div>
              
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

const MainSliderData = [
  {
    id: "1",
    img_src: "./assets/Images/feature/feature-4.png",
    vid_src: "https://youtube.com",
    category: "TECHNOLOGY",
    date: "JUNE 25, 2022",
    title:
      "Japan's Virus Success Has Puzzled The World. Is its Luck Running Out",
    sub_title:
      "The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower...",
  },
  
];
