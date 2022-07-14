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
    <div className="bg-[#17222b] w-[100%]">
      <div className="w-[100%] md:w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
        <div className="footermain ">
          <div className="pt-12 pb-4">
            <div className="grid md:grid-cols-2  border-b-2 border-gray	border-dashed pb-6">
              <div className="col-span-1 ">
                <div className="ml-[14px]">
                <img
                  src="./assets/images/GurugramNewsLogo.png"
                  alt="gurugram-news-network"
                  className="mx-auto w-48 md:mx-0 md:w-60  sm:w-48 sm:mx-auto  "
                />
                </div>

                <div className=" mx-auto p-4  iconBox md:mx-0 mt-6  sm:mx-auto text-white">
                  <div className="">
                    <h3 className="bg-black  w-fit p-2">About US</h3>
                  </div>
                  <div className="text-justify	">
                    <span>
                      'Gurugram News' channel is the only web news channel in
                      the city of Gurugram, which has made a different identity
                      in the hearts of people in a very short time. It is our
                      endeavor to show you every important news of Gurugram
                      which is important for you. 'Gurugram News' channel is
                      such a platform through which the voice of the people of
                      Gurugram is brought prominently to the rulers. All types
                      of news related to Gurugram are broadcast to the viewers
                      by 'Gurugram News' like politics, sports, crime,
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-20 mx-10 md:mx-0">
                <div className="flex mb-6 h-14">
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
                  <div className="bg-gray-600 mx-1 flex p-3 rounded-md transition-all cursor-pointer footerInsta">
                    <Instagram color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerContainer w-[100%]  m-auto">
            <div className="">
              <div className="w-[100%]">
                <div className=" md:flex  sm:border-b-2 border-gray border-dashed">
                  <div className="text-white md:w-[50%]  sm:border-b-2  md:border-b-0 md:border-r-2 md:border-gray border-dashed pb-6  h-80 ml-7 md:mx-auto">
                    <h2 className="m-3.5 mx-5">News Categories</h2>
                    <div className="flex justify-between mr-20 mx-3 ">
                      <div className="left">
                        <li className="list-none m-3.5  hover:text-red-500"> <a href="#">Politics</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#">Business</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#">Technology</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#">Science</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Health</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Sports</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Entertainment</a></li>
                      </div>

                      <div className="right">
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Education</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Obituaries</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Obituaries</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Corrections</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Newspaper</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Corrections</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Foods</a></li>
                      </div>
                    </div>
                  </div>

                  <div className="text-white md:w-[50%] ml-7">
                    <h2 className="m-3.5 mx-6">Living</h2>
                    <div className="flex justify-between mr-20 mx-3 text-white">
                      <div className="left">
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#">Crossword</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#">Food</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#">Automobiles</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Education</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Health</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Magazine</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Weddings</a></li>
                      </div>
                      <div className="right ">
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Classifieds</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Photographies</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> NYT Store</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Journalisms</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Public Editor</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> Tools Services</a></li>
                        <li className="list-none m-3.5  hover:text-red-500"><a href="#"> My Account</a></li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="col-span-2 text-white w-screen">
                    <div className="items-start m-6  mr-[50px]  rounded-md border-gray border-dashed	mt-2 p-2">
                      <h2 className="mt-2">Newpark News Services</h2>
                      <div className="flex items-center	mt-2">
                        <FooterMobile />
                        <a href="#">
                        <p className="mx-2  hover:text-red-500">On your mobile</p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2	">
                        <FooterMicophone />
                        <a href="#">
                        <p className="mx-2  hover:text-red-500">On smart speakers</p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        <FooterMessage />
                        <a href="#">
                        <p className="mx-2  hover:text-red-500">Contact Newspark news</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-white w-screen">
                    <div className="items-start m-6  mr-[50px]  p-2 rounded-md border-gray border-dashed	mt-2 ">
                      {/* <h2 className="mt-2">Newpark News Services</h2> */}
                      <div className="flex items-center	mt-2">
                        {/* <FooterMobile /> */}
                        <a href="#">
                        <p className="mx-2  hover:text-red-500" >About</p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2	">
                        {/* <FooterMicophone /> */}
                        <a href="#">
                        <p className="mx-2  hover:text-red-500">Privacy & Policy</p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <FooterMessage /> */}
                        <a href="#">
                        <p className="mx-2  hover:text-red-500">Advertise</p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <FooterMessage /> */}
                        <a href="#">
                        <p className="mx-2  hover:text-red-500">Terms Of Use</p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <FooterMessage /> */}
                        <a href="#">
                        <p className="mx-2  hover:text-red-500">Contact Us</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t-2 border-dashed ">

              <div className=" text-white text-[14px] text-center">
                  <a href="#">© Copyright 2022, All Rights Reserved |</a>
                  <a href="#">❤️Gurugram News Network | Developed by</a>
                  <a className="ml-1" href="#">Callsmaster Services LLP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
