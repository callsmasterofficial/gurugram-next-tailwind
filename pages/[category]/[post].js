import React from "react";
import Header from "../../components/Header";
import HeaderTopBar from "../../components/HeaderTopBar";
import ParticularPost from "../../components/ParticularPost";
import Footer from "../../components/Footer";

export default function Post() {
  return (
    <>
        <HeaderTopBar />
        <Header />
      <div className="w-[80%] ninetyPercentWidth m-auto 3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
        <ParticularPost />
        <Footer />
      </div>
    </>
  );
}
