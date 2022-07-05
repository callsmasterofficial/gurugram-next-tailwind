import React from "react";

export default function HeaderSingleElement({name}) {
  return (
    <div className="">
      <div className="p-2 text-lg font-semibold text-white">
          <span className="">{name || ""}</span>        
      </div>
    </div>
  );
}
