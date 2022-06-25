import React from "react";
import MainSinglepostItem from "./MainSinglepostItem";

export default function MainRelatedPopularSidebar() {
  return (
    <>
      <div className=" rounded-md p-2 my-5 md:my-0">
        <div className="sidebarHeading flex justify-evenly mx-4">
          <div>
            <button className="bg-gray-100 cursor-pointer p-2 rounded-md mx-4">
              Related
            </button>
          </div>
          <div>
            <button className="bg-gray-100 cursor-pointer p-2 rounded-md mx-4">
              Tech
            </button>
          </div>
          <div>
            <button className="bg-gray-100 cursor-pointer p-2 rounded-md mx-4">
              Popular
            </button>
          </div>
        </div>
        {/* Main Gallery Sidebar List */}
        <div>
          <MainSinglepostItem />
        </div>
      </div>
    </>
  );
}
