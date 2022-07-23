import React from "react";
import FeatureSinglePost from "./FeatureSinglePost";

export default function FeatureArea() {
  return (
    <div className="w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
      <div className="featureArea mt-20 overflow-hidden">
        <div className="featureHeading font-bold text-xl border-t-2 border-b-2 p-2">
          <h1>Feature News</h1>
        </div>
        <div className="">
          <FeatureSinglePost />
        </div>
      </div>
    </div>
  );
}
