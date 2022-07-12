import React, { useState }from "react";
import MainSinglepostItem from "./MainSinglepostItem";
const btnClass='cursor-pointer p-1 text-[15px] sm:text-[18px] rounded-md mx-0 border-red-500 md:mx-1 lg:mx-2 capitalize'
export default function MainRelatedPopularSidebar() {
  const [active, setActive]=useState(0);
  return (
    <>
      <div className="w-[35%] rounded-md md:my-0 bg-blue-50">
        <div className="sidebarHeading flex flex-wrap justify-evenly mx-4 lg:mx-1">
          <div>
            <button className={active===0?`${btnClass} border-b-4`: `${btnClass}`} onClick={()=>setActive(0)}>
              Related
            </button>
          </div>
          <div>
            <button className={active===1?`${btnClass} border-b-4`: `${btnClass}`} onClick={()=>setActive(1)}>
              Tech
            </button>
          </div>
          <div>
            <button className={active===2?`${btnClass} border-b-4`: `${btnClass}`} onClick={()=>setActive(2)}>
              Popular
            </button>
          </div>
        </div>
        {/* Main Gallery Sidebar List */}
        <div className="">
          <MainSinglepostItem active={active} />
        </div>
      </div>
    </>
  );
}
