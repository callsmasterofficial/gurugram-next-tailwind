import React from "react";

export default function HeaderSingleElement({name}) {
  return (
    <div className="p-0 sm:w-[60%] md:w-[100%]">
      <div className="group inline-block relative">
        <button className=" text-white font-semibold px-2 rounded inline-flex items-center">
          <span className="mr-6 uppercase">{name || ""}</span>        
        </button>
        
      </div>
    </div>
  );
}
