import React from "react";
import PlayPostSingleItem from "./PlayPostSingleItem";


export default function PlayPostArea() {
  return (
    <div className="w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto bg-red-300">
    <section className=" mt-10 bg-[#17222b] mx-auto sm:p-5 p-3">
      <div className="custom-container">
            <PlayPostSingleItem />            
      </div>
    </section>
    </div>
  );
}
