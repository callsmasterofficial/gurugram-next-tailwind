import React from "react";
import TrendingSinglePost from "./TrendingSinglePost";

import Socials from "./Socials"

export default function TrendingSidebar() {
  return (
    <div className="trending-right-sidebar">
      <Socials />
      <div className="trending-most-view mt-25 mx-auto">
        <div className="section-title border-b-2 border-solid p-3">
          <h3 className="title mx-2 md:text-xl font-bold">Most View</h3>
        </div>
      </div>
      <div className="trending-sidebar-slider lg:mb-12  ">
        <div className="post_gallery_items mt-6">
          <TrendingSinglePost />
        </div>
        
      </div>
    </div>
  );
}
