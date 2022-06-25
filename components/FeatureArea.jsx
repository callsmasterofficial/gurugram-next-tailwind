import React from 'react'
import FeatureSinglePost from "./FeatureSinglePost";

export default function FeatureArea() {
  return (
    <div className="featureArea">
        <div className="featureHeading mx-6 font-bold text-xl">
            <h1>Feature News</h1>
        </div>
        <div className="md:grid md:grid-cols-4 md:mx-3">
            <FeatureSinglePost />
        </div>
    </div>
  )
}
