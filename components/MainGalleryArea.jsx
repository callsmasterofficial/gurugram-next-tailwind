import React from 'react'
import MainSlider from "./MainSlider"
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar"
import Testing from './Testing'

export default function MainGalleryArea() {
  return (
    <div className="flex flex-col md:flex-row mx-1 md:mx-16 my-2">
        <MainSlider/>
        <MainRelatedPopularSidebar />
    </div>
  )
}
