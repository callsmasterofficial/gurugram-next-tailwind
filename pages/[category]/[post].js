import React from "react";
import Header from "../../components/Header";
import HeaderTopBar from "../../components/HeaderTopBar";
import ParticularPost from "../../components/ParticularPost";
import Footer from "../../components/Footer";
import FixedBottomMobile from "../../components/FixedBottomMobile";
import ParticularPostSidebar from "../../components/ParticularPostSidebar";

export default function Post() {
  return (
    <>
        <FixedBottomMobile />
        <HeaderTopBar />
        <Header />
        <div className="grid md:grid-cols-10 w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
          <div className="col-span-7">
            <ParticularPost />
          </div>
          <div className="sidebar col-span-3 ">
            <ParticularPostSidebar />
          </div>
        </div>
      
        <Footer />
    </>
  );
}
