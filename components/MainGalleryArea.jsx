import React from 'react'
import MainSlider from "./MainSlider"
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar"
import Testing from './Testing'

export default function MainGalleryArea() {
  return (
    <div className="w-[80%]  m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[40%] 6xl:w-[30%]  3xl:m-auto ">
    <div className="flex flex-col md:flex-row mx-1  my-2">
        <MainSlider/>
        <MainRelatedPopularSidebar />
    </div>
    </div>
  )
}
