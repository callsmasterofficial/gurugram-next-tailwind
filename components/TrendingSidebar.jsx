import React from "react";
import TrendingSinglePost from "./TrendingSinglePost";

import Socials from "./Socials";

export default function TrendingSidebar() {
  return (
    <div className="trending-right-sidebar md:mx-3">
      <div className="socialMediaIcons">
        <Socials />
      </div>
      <div className="trending-most-view mt-25">
        <div className="section-title border-b-2 border-solid mt-5 md:mt-0 md:p-3">
          <h3 className="title md:text-xl font-bold mb-2 md:mb-0">Most View</h3>
        </div>
      </div>
      <div className="trending-sidebar-slider lg:mb-12">
        <div className="post_gallery_items mt-6">
          <TrendingSinglePost />
        </div>
      </div>
    </div>
  );
}
