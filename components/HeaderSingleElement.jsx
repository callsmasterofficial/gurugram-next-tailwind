import React from "react";

export default function HeaderSingleElement({name}) {
  return (
    <div className="cursor-pointer">
      <div className="text-xs font-bold lg:text-lg lg:font-semibold text-white">
          <span className="">{name || ""}</span>        
      </div>
    </div>
  );
}
