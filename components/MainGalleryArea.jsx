import React from 'react'
import MainSlider from "./MainSlider"
import MainRelatedPopularSidebar from "./MainRelatedPopularSidebar"
import Testing from './Testing'

export default function MainGalleryArea() {
  return (
    <div className="w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
    {/* <div className="flex flex-col lg:flex-row mx-1  my-2">
        <MainSlider/>
        <MainRelatedPopularSidebar />
    </div> */}
    <div className="post__gallery__area mt-2 md:mt-5 mx-auto">
        <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto">
                <MainSlider/>
                <MainRelatedPopularSidebar />
            </div>
        </div>
    </div>
    </div>
  )
}
