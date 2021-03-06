import React from 'react'
import HeaderTopBar from '../../components/HeaderTopBar'
import Header from '../../components/Header'
import TechArea from "../../components/TechArea"
import FiveCHeader from "../../components/FiveCHeader"
import Testing from "../../components/Testing"
import Footer from '../../components/Footer'
import TechAreaTile from '../../components/TechAreaTile'
import ParticularPostSidebar from "../../components/ParticularPostSidebar";


export default function tech() {
  return (
    <>
    
      <HeaderTopBar/>
      <Header />
      <div className="grid lg:grid-cols-10 w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto">
        <div className="col-span-10">
          <FiveCHeader/>
        </div>
      </div>
      <div className="grid lg:grid-cols-10 w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto mt-4">
          <div className="lg:col-span-7 lg:mr-2">
            <TechAreaTile />
          </div>

          <div className=" lg:col-span-3 lg:ml-2">
            <ParticularPostSidebar />
          </div>
    </div>
      <Footer/>
    </>
  )
}
