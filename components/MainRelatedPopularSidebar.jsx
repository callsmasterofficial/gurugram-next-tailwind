import React, { useState } from "react";
import MainSinglepostItem from "./MainSinglepostItem";

export default function MainRelatedPopularSidebar() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="col-span-1 mx-0 md:ml-2 md:mr-1 mt-[-27px] sm:mt-0 border-2 p-2">
        <div className="post_gallery_sidebar ">
          <ul
            className="grid grid-cols-3 text-[12px] mb-2"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item flex justify-center mr-1 bg-red-400 p-2 md:px-8 text-white">
              <a
                className="nav-link"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                TRENDING
              </a>
            </li>
            <li className="nav-item flex justify-center mx-1 bg-red-400 p-2 md:px-8 text-white">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                LATEST
              </a>
            </li>
            <li className="nav-item flex justify-center ml-1 bg-red-400 p-2 md:px-8 text-white">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                POPULAR
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="post_gallery_items">
                <div className="gallery_item">
                  <div className="gallery_item_thumb">
                    <img src="assets/images/gallery-1.jpg" alt="gallery" />
                  </div>
                  <div className="gallery_item_content">
                    {/* <div className="post-meta">
                                                <div className="meta-categories">
                                                    <a href="#">TECHNOLOGY</a>
                                                </div>
                                                <div className="meta-date">
                                                    <span>March 26, 2020</span>
                                                </div>
                                            </div> */}
                    <h4 className="title">
                      <a href="#">
                        Copa America: Luis Suarez from devastated US
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="gallery_item">
                  <div className="gallery_item_thumb">
                    <img src="assets/images/gallery-2.jpg" alt="gallery" />
                  </div>
                  <div className="gallery_item_content">
                    {/* <div className="post-meta">
                                                <div className="meta-categories">
                                                    <a href="#">TECHNOLOGY</a>
                                                </div>
                                                <div className="meta-date">
                                                    <span>March 26, 2020</span>
                                                </div>
                                            </div> */}
                    <h4 className="title">
                      <a href="#">Nancy Zhang a Chinese busy woman and Dhaka</a>
                    </h4>
                  </div>
                </div>
                <div className="gallery_item">
                  <div className="gallery_item_thumb">
                    <img src="assets/images/gallery-3.jpg" alt="gallery" />
                  </div>
                  <div className="gallery_item_content">
                    {/* <div className="post-meta">
                                                <div className="meta-categories">
                                                    <a href="#">TECHNOLOGY</a>
                                                </div>
                                                <div className="meta-date">
                                                    <span>March 26, 2020</span>
                                                </div>
                                            </div> */}
                    <h4 className="title">
                      <a href="#">
                        U.S. Response subash says he will label regions by risk
                        of…
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="gallery_item">
                  <div className="gallery_item_thumb">
                    <img src="assets/images/gallery-4.jpg" alt="gallery" />
                  </div>
                  <div className="gallery_item_content">
                    {/* <div className="post-meta">
                                                <div className="meta-categories">
                                                    <a href="#">TECHNOLOGY</a>
                                                </div>
                                                <div className="meta-date">
                                                    <span>March 26, 2020</span>
                                                </div>
                                            </div> */}
                    <h4 className="title">
                      <a href="#">
                        Venezuela elan govt and opposit the property collect
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="gallery_item">
                  <div className="gallery_item_thumb">
                    <img src="assets/images/gallery-5.jpg" alt="gallery" />
                  </div>
                  <div className="gallery_item_content">
                    {/* <div className="post-meta">
                                                <div className="meta-categories">
                                                    <a href="#">TECHNOLOGY</a>
                                                </div>
                                                <div className="meta-date">
                                                    <span>March 26, 2020</span>
                                                </div>
                                            </div> */}
                    <h4 className="title">
                      <a href="#">
                        Cheap smartphone sensor could help you old food safe
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*
<div classNameName="w-[35%] rounded-md md:my-0 bg-blue-50">
        <div classNameName="sidebarHeading flex flex-wrap justify-evenly mx-4 lg:mx-1">
          <div>
            <button classNameName={active===0?`${btnclassName} border-b-4`: `${btnclassName}`} onClick={()=>setActive(0)}>
              Related
            </button>
          </div>
          <div>
            <button classNameName={active===1?`${btnclassName} border-b-4`: `${btnclassName}`} onClick={()=>setActive(1)}>
              Tech
            </button>
          </div>
          <div>
            <button classNameName={active===2?`${btnclassName} border-b-4`: `${btnclassName}`} onClick={()=>setActive(2)}>
              Popular
            </button>
          </div>
        </div>
        <div classNameName="">
          <MainSinglepostItem active={active} />
        </div>
      </div>

*/
