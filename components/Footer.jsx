import React from "react";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";
import FooterSidebar from "../components/FooterSidebar";
import { FooterMobile } from "./icons/FooterMobile";
import  FooterMessage  from "./icons/FooterMessage";
import { FooterMicophone } from "./icons/FooterMicophone";
import FooterTwitter from "./FooterTwitter";

export default function Footer() {
  return (
    // <div className='bg-[#ff3200]  grid grid-cols-6' >
    //     <h3 className='col-span-3 bg-green-500'>this is background</h3>
    //     <h3>this is background</h3>
    //     <h3>this is background</h3>
    //     <h3>this is background</h3>
    // </div>
    <>
      <div className="container-fluid bg-[#17222b]">
        <div className="w-[80%] m-auto pt-12 pb-12">
          <div className="grid grid-cols-2  border-b-2 border-gray	border-dashed pb-6">
            <div ClassName="col-span-1">
              <img
                src="assets/Images/Gurugram-News-Logo.jpg"
                alt="gurugram-news-network"
                className="w-72"
              />

              <div className="iconBox flex mt-6">
                <Twitter color="white" />
                <Facebook />
                <Youtube />
                <Instagram />
              </div>
            </div>
            <div className="col-span-1 mt-20">
              <div className="flex mb-6">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="p-4 w-[80%] rounded-sm rounded-r-none border-none outline-none"
                />
                <button className="text-white w-[50%] bg-blue-400 rounded-sm rounded-l-none">
                  SIGN UP
                </button>
              </div>
              <div className="text-white">
                <p>We hate spam as much as you do</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerContainer w-[80%] m-auto">
          <div className="grid grid-cols-3 place-items-center">
            <div className="col-span-2">
              <div className="flex  border-b-2 border-gray border-dashed">
                <div className="text-white  w-[50%] border-r-2 border-gray border-dashed pb-6  h-80">
                  <h2 className="m-3.5">News Categories</h2>
                  <div className="flex justify-between mr-20  ">
                    <div className="left">
                      <li className="list-none m-3.5">Politics</li>
                      <li className="list-none m-3.5">Politics</li>
                      <li className="list-none m-3.5">Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                    </div>

                    <div className="right">
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                    </div>
                  </div>
                </div>

                <div className="text-white w-[50%] ml-10">
                  <h2 className="m-3.5">Living</h2>
                  <div className="flex justify-between mr-20  text-white">
                    <div className="left">
                      <li className="list-none m-3.5">Politics</li>
                      <li className="list-none m-3.5">Politics</li>
                      <li className="list-none m-3.5">Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                    </div>

                    <div className="right ">
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
             <div className="text-white  border-r-2 border-gray border-dashed">
              <h3>Opinion</h3>
              <div className="right mr-20">
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                      <li className="list-none m-3.5"> Politics</li>
                    </div>
             </div>
             <div className="col-span-2 text-white" >
              <div >
              <FooterTwitter/>
              </div>
             


             </div>
             </div>
            </div>

            <div className="text-white  border-l-2 border-gray border-dashed">
              <h4 className="ml-5">News Categories</h4>
              <FooterSidebar />
              <div className="items-start m-6 border-t-2 border-gray border-dashed 	mt-2">
                <h2 className="mt-2">Newpark News Services</h2>
                <div className="flex items-center	mt-2">
                <FooterMobile/><p>On your mobile</p>
                </div>
                <div className="flex items-center mt-2	">
                <FooterMicophone/><p>On smart speakers</p>
                </div>
                <div className="flex items-center mt-2	">
                <FooterMessage/><p>Contact Newspark news</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
