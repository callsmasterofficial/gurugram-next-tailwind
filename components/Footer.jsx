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
    <div className="bg-[#17222b] w-[100%] mt-5">
      <div className="w-[100%] md:w-[80%] ninetyPercentWidth m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto ">
        <div className="footermain ">
          <div className="pt-12 pb-4">
            <div className="grid md:grid-cols-3  border-b-2 border-gray	border-dashed pb-6">
              {/* <div className="">
                  <img
                    src="./assets/images/GurugramNewsLogo.png"
                    alt="gurugram-news-network"
                    className="mx-auto w-40 md:mx-0 md:w-60  sm:w-48 sm:mx-auto  "
                  />
                </div> */}
              <div className="col-span-1 ">
                <div className=" mx-auto p-4  iconBox md:mx-0 mt-6  sm:mx-auto text-white">
                  <div className="">
                    <h3 className="titleSkewFooter w-fit text-white px-2 py-1  -skew-x-3 mb-4 ">
                      About US
                    </h3>
                  </div>
                  <div className="text-justify	">
                    <p>
                      'Gurugram News' channel is the only web news channel in
                      the city of Gurugram, which has made a different identity
                      in the hearts of people in a very short time. It is our
                      endeavor to show you every important news of Gurugram
                      which is important for you. 'Gurugram News' channel is
                      such a platform through which the voice of the people of
                      Gurugram is brought prominently to the rulers. All types
                      of news related to Gurugram are broadcast to the viewers
                      by 'Gurugram News' like politics, sports, crime,
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 mt-10 md:mx-10  md:ml-6 Latest-post">
                <div className="text-white">
                  <h3 className="titleSkewFooter w-fit text-white px-2 py-1  -skew-x-3 mb-4 ">
                    Latest Post
                  </h3>
                </div>
                <div className="grid grid-cols-3 mx-auto	">
                  <div className="col-span-1 ">
                    {/* <div className="text-white">
                      <h3 className="bg-black p-2">Latest Post</h3>
                    </div> */}
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                  </div>
                  <div className="col-span-1 ">
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                  </div>
                  <div className="col-span-1 ">
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                    <img
                      className="p-1"
                      src="https://www.teztarrar.com/wp-content/uploads/2022/07/20-july-3-390x220.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-1 mt-10 mx-10 md:mx-0 md:ml-6 Latest-post">
                <div className="text-white">
                  <h3 className="titleSkewFooter w-fit text-white px-2 py-1  -skew-x-3 mb-4 ">
                    Follow Us
                  </h3>
                </div>
                <div className=" mx-auto  iconBox md:mx-0  flex mt-6 sm:w-48 sm:mx-auto">
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
                {/* <img src="./assets/images/playstore.png" /> */}
                {/* <input
                    type="text"
                    placeholder="Your email address"
                    className="p-4 w-[80%] rounded-sm rounded-r-none border-none outline-none "
                  />
                  <button className="text-white w-[50%] bg-blue-400 rounded-sm rounded-l-none hover:bg-blue-800 hover:font-bold">
                    SIGN UP
                  </button> */}
                <div className="text-white mt-5">
                  <h3 className="titleSkewFooter w-fit text-white px-2 py-1  -skew-x-3 mb-4 ">
                    Available on Store
                  </h3>
                </div>
                <div className="mt-5 mb-5 cursor-pointer">
                  <a href="">
                    <img
                      className="w-48"
                      src="https://www.teztarrar.com/wp-content/uploads/2021/09/playstore-image.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footerContainer w-[100%]  m-auto">
            <div className="">
              <div className="w-[100%]">
                <div className=" md:flex  sm:border-b-2 border-gray border-dashed">
                  <div className="text-white md:w-[50%]  sm:border-b-2  md:border-b-0 md:border-r-2 md:border-gray border-dashed pb-6  h-80  md:mx-auto">
                    <h2 className="m-3.5 mx-5 titleSkewFooter w-fit text-white px-2 py-1  -skew-x-3 mb-4 ">
                      News Categories
                    </h2>
                    <div className="flex justify-between mr-20 mx-3 ">
                      <div className="left">
                        <li className="list-none m-3.5  hover:text-red-500">
                          {" "}
                          <a href="#">Politics</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#">Business</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#">Technology</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#">Science</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Health</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Sports</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Entertainment</a>
                        </li>
                      </div>

                      <div className="right">
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Education</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Obituaries</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Obituaries</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Corrections</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Newspaper</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Corrections</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Foods</a>
                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="text-white md:w-[50%] ">
                    <h2 className="m-3.5 mx-6 titleSkewFooter w-fit text-white px-2 py-1  -skew-x-3 mb-4 ">
                      Living
                    </h2>
                    <div className="flex justify-between mr-20 mx-3 text-white">
                      <div className="left">
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#">Crossword</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#">Food</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#">Automobiles</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Education</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Health</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Magazine</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Weddings</a>
                        </li>
                      </div>
                      <div className="right ">
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Classifieds</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Photographies</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> NYT Store</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Journalisms</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Public Editor</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> Tools Services</a>
                        </li>
                        <li className="list-none m-3.5  hover:text-red-500">
                          <a href="#"> My Account</a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex sm:flex sm:justify-between ">
                  <div className="col-span-2 text-white">
                    <div className="items-start rounded-md border-gray border-dashed	mt-2 p-2">
                      <h2 className="mt-2 m-3.5 titleSkewFooter w-fit text-white px-2 py-1  -skew-x-3 mb-4  ">
                        Newpark News Services
                      </h2>
                      <div className="flex items-center	mt-2 m-3.5">
                        <FooterMobile />
                        <a href="#">
                          <p className="mx-2  hover:text-red-500">
                            On your mobile
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2 m-3.5	">
                        <FooterMicophone />
                        <a href="#">
                          <p className="mx-2  hover:text-red-500">
                            On smart speakers
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2 m-3.5">
                        <FooterMessage />
                        <a href="#">
                          <p className="mx-2  hover:text-red-500">
                            Contact Newspark news
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-white">
                    <div className="items-start   p-2 rounded-md border-gray border-dashed	mt-2 sm:mr-[55px] ">
                      {/* <h2 className="mt-2">Newpark News Services</h2> */}
                      <div className="flex items-center	mt-2">
                        {/* <FooterMobile /> */}
                        <a href="#">
                          <p className="mx-2  hover:text-red-500 m-2.5">
                            About
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2	">
                        {/* <FooterMicophone /> */}
                        <a href="#">
                          <p className="mx-2  hover:text-red-500 m-2.5">
                            Privacy & Policy
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <FooterMessage /> */}
                        <a href="#">
                          <p className="mx-2  hover:text-red-500 m-2.5">
                            Advertise
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <FooterMessage /> */}
                        <a href="#">
                          <p className="mx-2  hover:text-red-500 m-2.5">
                            Terms Of Use
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-2">
                        {/* <FooterMessage /> */}
                        <a href="#">
                          <p className="mx-2  hover:text-red-500 m-1.5">
                            Contact Us
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t-2 border-dashed ">
              <div className=" text-white text-[14px] flex flex-nowrap	justify-center	">
                <p>© Copyright 2022, All Rights Reserved |</p>
                <p>❤️Gurugram News Network | Developed by</p>
                <a
                  className="ml-1  hover:text-red-500"
                  href="https://www.callsmaster.com/"
                  target="_blank"
                >
                  Callsmaster Services LLP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
