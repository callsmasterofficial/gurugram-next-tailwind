import React from "react";
import { Videoyt } from "./icons";

export default function MainSlider() {
  return (
    <>
      {MainSliderData.map((data) => {
        return (
          <div className="col-span-2">
                    <div className="post_gallery_slider">
                        <div className="post_gallery_play">
                            <div className="bg-image"></div>
                            <div className="post__gallery_play_content">
                                <div className="post-meta">
                                    <div className="meta-categories">
                                        <a href="#">TECHNOLOGY</a>
                                    </div>
                                    <div className="meta-date">
                                        <span>March 26, 2020</span>
                                    </div>
                                </div>
                                <h2 className="title"><a href="#">Japan’s virus success has puzzled the world. Is its luck running out?</a></h2>
                                <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower…</p>
                            </div>
                            <div className="post_play_btn">
                                <a className="video-popup" href="https://www.youtube.com/watch?v=4mGyYNuG6us" a><i className="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="post_gallery_inner_slider grid grid-cols-8 max-w-[100%]">
                        <div className="item">
                            <img src="assets/images/gallery-post/item-1.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/gallery-post/item-2.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/gallery-post/item-3.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/gallery-post/item-4.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/gallery-post/item-5.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/gallery-post/item-6.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/gallery-post/item-7.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/gallery-post/item-2.jpg" alt="" />
                        </div>
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


/*
<div key={data.id} classNameName="post_gallery_play md:mr-5">
            <div classNameName="bg-image"></div>
            <div classNameName="post__gallery_play_content">
              <div classNameName="post-meta">
                <div classNameName="meta-categories">
                  <a href="#">{data.category}</a>
                </div>
                <div classNameName="meta-date">
                  <span>{data.date}</span>
                </div>
              </div>
              <h2 classNameName="title">
                <a href="#">
                  {data.title}
                </a>
              </h2>
              <p>
                {data.sub_title}
              </p>
            </div>
            <div classNameName="post_play_btn">
              <a
                classNameName="video-popup"
                href={data.vid_src}
                
              >
                <div classNameName="post_play_btn bg-red-500 w-14 h-14 items-center justify-center flex rounded-full">
                  <Videoyt width="30px" height="30px"/>
                </div>
              
              </a>
            </div>
          </div>

*/ 
