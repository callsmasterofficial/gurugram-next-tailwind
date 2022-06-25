import React from 'react'
import MainSlider from "./MainSlider"
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar"

export default function MainGalleryArea() {
  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-6 my-2">
        <MainSlider className="md:w-[70%]"/>
        <MainRelatedPopularSidebar className="w-[20%]" />
    </div>
  )
}
