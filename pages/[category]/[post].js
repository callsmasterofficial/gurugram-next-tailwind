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
        <ParticularPost />
      
        <Footer />
    </>
  );
}
