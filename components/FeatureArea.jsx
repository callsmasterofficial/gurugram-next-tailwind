import React from 'react'
import FeatureSinglePost from "./FeatureSinglePost";

export default function FeatureArea() {
  return (
    <div className="featureArea mx-12">
        <div className="featureHeading mx-6 font-bold text-xl">
            <h1>Feature News</h1>
        </div>
        <div className="pt-4">
            <FeatureSinglePost />
        </div>
    </div>
  )
}
