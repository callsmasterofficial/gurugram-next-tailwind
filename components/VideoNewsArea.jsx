import React from 'react';
import TrendingSinglePost from "./TrendingSinglePost"

export default function VideoNewsArea() {
  return (
    <div className="w-[80%] ninetyPercentWidth  m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
    <section className="video-news-area border-2 overflow-hidden mt-20">
        <div className="container custom-container">
            <div className="video-news-box">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="video-news-post">
                            <div className="section-title section-title-2">
                                <h3 className="title  text-xl m-2 ml-8">Videos News</h3>
                            </div>
                            <div className="video-news-post-item">
                                <div className="video-news-post-thumb">
                                    <img src="assets/images/video-post-thumb.jpg" alt="" />
                                    <div className="play-btn">
                                        <a className="video-popup" href="https://www.youtube.com/watch?v=HalMzk1FFM0"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div className="video-news-post-content">
                                    <div className="post-meta">
                                        <div className="meta-categories">
                                            <a href="#">TECHNOLOGY</a>
                                        </div>
                                        <div className="meta-date">
                                            <span>March 26, 2020</span>
                                        </div>
                                    </div>
                                    <h3 className="title"><a href="#">Riots Report Shows London Needs To Maintain Police Numbers, Says Mayor</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 ml-4 ">
                        <div className="populer-post">
                            <div className="section-title border-b-2 border-solid p-3 md:mt-4">
                                <h3 className="  title font-semibold">Popular</h3>
                            </div>
                            <div className="trending-sidebar-slider post_gallery_items">
                                <div className="populer-post-slider mt-6">
                                    <TrendingSinglePost />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
