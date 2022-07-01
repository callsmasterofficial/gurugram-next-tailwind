import React from "react";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";
import FooterSidebar from "../components/FooterSidebar";
import FooterMobile from "./icons/FooterMobile";
import FooterMessage from "./icons/FooterMessage";
import FooterMicophone from "./icons/FooterMicophone";
import FooterTwitter from "./FooterTwitter";

export default function Footer() {
  return (
    <>
      <div className="footermain bg-[#17222b]">
        <div className="w-[100%] md:w-[80%] m-auto pt-12 pb-12">
          <div className="grid md:grid-cols-2  border-b-2 border-gray	border-dashed pb-6">
            <div ClassName="col-span-1 ">
              <img
                src="assets/Images/Gurugram-News-Logo.jpg"
                alt="gurugram-news-network"
                className="mx-auto w-48 md:mx-0 md:w-72 sm:w-48 sm:mx-auto "
              />

              <div className=" mx-auto w-48 iconBox md:mx-0  flex mt-6 sm:w-48 sm:mx-auto">
                <div className="bg-gray-600 mx-1 flex p-3 rounded-md transition-all cursor-pointer hover:bg-[#1DA1F2]">
                  <Twitter color="white" />
                </div>
                <div className="bg-gray-600 mx-1 flex p-3 rounded-md transition-all cursor-pointer hover:bg-[#4267B2]">
                  <Facebook color="white" />
                </div>
                <div className="bg-gray-600 mx-1 flex p-3 rounded-md transition-all cursor-pointer hover:bg-[#FF0000]">
                  <Youtube color="white" />
                </div>
                <div className="bg-gray-600 mx-1 flex p-3 rounded-md transition-all cursor-pointer hover:bg-[#E1306C]">
                  <Instagram color="white" />
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-20 mx-10 md:mx-0">
              <div className="flex mb-6">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="p-4 w-[80%] rounded-sm rounded-r-none border-none outline-none "
                />
                <button className="text-white w-[50%] bg-blue-400 rounded-sm rounded-l-none hover:bg-blue-800 hover:font-bold">
                  SIGN UP
                </button>
              </div>
              <div className="text-white">
                <p>We hate spam as much as you do</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerContainer w-[100%] md:w-[80%] m-auto">
          <div className="">
            <div className="w-[100%]">
              <div className=" md:flex  sm:border-b-2 border-gray border-dashed">
                <div className="text-white md:w-[50%]  sm:border-b-2  md:border-b-0 md:border-r-2 md:border-gray border-dashed pb-6  h-80 ml-7 md:mx-auto">
                  <h2 className="m-3.5 mx-5">News Categories</h2>
                  <div className="flex justify-between mr-20 mx-3 ">
                    <div className="left">
                      <li className="list-none m-3.5">Politics</li>
                      <li className="list-none m-3.5">Business</li>
                      <li className="list-none m-3.5">Technology</li>
                      <li className="list-none m-3.5">Science</li>
                      <li className="list-none m-3.5"> Health</li>
                      <li className="list-none m-3.5"> Sports</li>
                      <li className="list-none m-3.5"> Entertainment</li>
                    </div>

                    <div className="right">
                      <li className="list-none m-3.5"> Education</li>
                      <li className="list-none m-3.5"> Obituaries</li>
                      <li className="list-none m-3.5"> Obituaries</li>
                      <li className="list-none m-3.5"> Corrections</li>
                      <li className="list-none m-3.5"> Newspaper</li>
                      <li className="list-none m-3.5"> Corrections</li>
                      <li className="list-none m-3.5"> Foods</li>
                    </div>
                  </div>
                </div>

                <div className="text-white md:w-[50%] ml-7">
                  <h2 className="m-3.5 mx-6">Living</h2>
                  <div className="flex justify-between mr-20 mx-3 text-white">
                    <div className="left">
                      <li className="list-none m-3.5">Crossword</li>
                      <li className="list-none m-3.5">Food</li>
                      <li className="list-none m-3.5">Automobiles</li>
                      <li className="list-none m-3.5"> Education</li>
                      <li className="list-none m-3.5"> Health</li>
                      <li className="list-none m-3.5"> Magazine</li>
                      <li className="list-none m-3.5"> Weddings</li>
                    </div>
                    <div className="right ">
                      <li className="list-none m-3.5"> Classifieds</li>
                      <li className="list-none m-3.5"> Photographies</li>
                      <li className="list-none m-3.5"> NYT Store</li>
                      <li className="list-none m-3.5"> Journalisms</li>
                      <li className="list-none m-3.5"> Public Editor</li>
                      <li className="list-none m-3.5"> Tools Services</li>
                      <li className="list-none m-3.5"> My Account</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex">
               
                <div className="col-span-2 text-white w-screen">
                  <div className="items-start m-6 ml-[50px] mr-[50px] bg-red-500 p-4 rounded-md border-gray border-dashed	mt-2">
                    <h2 className="mt-2">Newpark News Services</h2>
                    <div className="flex items-center	mt-2">
                      <FooterMobile />
                      <p className="mx-2">On your mobile</p>
                    </div>
                    <div className="flex items-center mt-2	">
                      <FooterMicophone />
                      <p className="mx-2">On smart speakers</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <FooterMessage />
                      <p className="mx-2">Contact Newspark news</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
