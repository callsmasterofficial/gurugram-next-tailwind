import React from 'react'
import HeaderTopBar from '../../components/HeaderTopBar'
import Header from '../../components/Header'
import TechArea from "../../components/TechArea"
import Testing from "../../components/Testing"
import Footer from '../../components/Footer'
import TechAreaTile from '../../components/TechAreaTile'
import ParticularPostSidebar from "../../components/ParticularPostSidebar";


export default function tech() {
  return (
    <>
    
      <HeaderTopBar/>
      <Header />
      <TechArea/>
      <div className="grid md:grid-cols-10 w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
          <div className="md:col-span-7">
            <TechAreaTile />
          </div>

          <div className=" md:col-span-3 ">

            <ParticularPostSidebar />
          </div>
    </div>
      <Footer/>
    </>
  )
}
