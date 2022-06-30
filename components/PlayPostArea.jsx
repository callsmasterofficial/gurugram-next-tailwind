import React from "react";
import PlayPostSingleItem from "./PlayPostSingleItem";


export default function PlayPostArea() {
  return (
    <section className="single-play-post-area mt-10 bg-gray-200 sm:w-[90%] mx-auto sm:p-5">
      <div className="custom-container">
            <PlayPostSingleItem />            
      </div>
    </section>
  );
}
