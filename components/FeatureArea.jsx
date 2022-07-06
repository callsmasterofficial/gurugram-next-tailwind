import React from 'react'
import FeatureSinglePost from "./FeatureSinglePost";

export default function FeatureArea() {
  return (
    <div className="w-[80%]  m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
    <div className="featureArea ">
        <div className="featureHeading mx-6 font-bold text-xl">
            <h1>Feature News</h1>
        </div>
        <div className="pt-4">
            <FeatureSinglePost />
        </div>
    </div>
    </div>

  )
}
