import React from "react";

export default function HeaderSingleElement({name}) {
  return (
    <div className="cursor-pointer">
      <div className="text-[12px] font-bold lg:text-[15px] lg:font-semibold text-white hover:text-red-500">
          <span className="">{name || ""}</span>        
      </div>
    </div>
  );
}
