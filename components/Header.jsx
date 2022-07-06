import React, { useState } from "react";
import HeaderSingleElement from "./HeaderSingleElement";
import HeaderOthersTab from "./HeaderOthersTab";
import { Search, User, DegreeCelcius, Sunrise, CloseButton } from "./icons";
import NextLink from "next/link";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleSearch = () => {
    console.log("search is happening...");
  }
  
  return (
    <div className="flex md:block">
      {/* Header,Logo & Banner */}
      <div className="bg-red-200 w-[80%] m-auto   3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto">
      <div className="hidden relative mb-0 md:flex md:items-center ">
        <div className="flex flex-wrap items-center justify-evenly" id="logo">
          <img
            src="./assets/images/GurugramNewsLogo.png"
            alt="gurugram-news-network"
            className="w-28 mx-auto md:w-36"
          />
        </div>
        <div
          className="hidden w-100% md:visible md:w-[50%] md:flex md:ml-auto p-2 cursor-pointer"
          id="appOrAds"
        >
          <img
            src="assets/Images/Gurugram-News-Banner.jpg"
            alt="gurugram-news-app-Banner"
            className=""
          />
        </div>
      </div>
      </div>
      {/* Nav Bar */}
      <div className="flex sm:p-2 md:p-1 bg-black" id="nav">
        {/* Sidebar Toggle */}
        <div
          className={
            sidebar
              ? "ml-1 my-0 p-1 z-50 opacity-0 rounded-md cursor-pointer md:hidden hover:bg-slate-200"
              : "ml-1 my-0 p-1 z-50 rounded-md cursor-pointer md:hidden hover:bg-slate-200"
          }
          onClick={handleSidebar}
        >
          <div className="w-4 h-1 bg-white mt-1 mb-1 transition-all duration-100 rounded-md"></div>
          <div className="w-6 h-1 bg-white mt-1 mb-1 transition-all duration-100 rounded-md"></div>
          <div className="w-4 h-1 bg-white mt-1 mb-1 transition-all duration-100 rounded-md"></div>
        </div>

        {/* Header,Logo & Banner for mobile View */}
        <div className="mr-auto ml-auto">
          <img
            src="./assets/images/GurugramNewsLogo.png"
            alt="gurugram-news-network"
            className="w-32 sm:w-36 md:hidden "
          />
        </div>

        {/* sidebar container */}
        <div className="uppercase">
          {/* sidebar overlay */}
          <div
            className={
              sidebar
                ? "bg-black cursor-pointer fixed inset-0 opacity-60 visible md:hidden"
                : "hidden opacity-0"
            }
            onClick={handleSidebar}
          ></div>
          {/* sidebar */}
          <div
            className={
              sidebar
                ? "bg-black duration-300 z-50 fixed inset-y-0 py-4 left-0 w-40 transition-right sm:w-64 md:hidden"
                : "bg-black duration-500 z-50 fixed inset-y-0 py-4 -left-full w-40 transition-right sm:w-64 md:hidden"
            }
          >
            {/* sidebar close button */}
            <button
              className="absolute -right-6 p-1 bg-white rounded-full text-gray-700 top-1 transition hover:bg-red-400"
              onClick={handleSidebar}
            >
              <CloseButton />
            </button>

            {/* sidebar menu */}
            <ul className=" font-normal text-gray-500">
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  {/* active item */}
                  <a className="bg-gray-100 font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    Desh
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    Haryana
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    Shehar
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    Crime
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    Technology
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    Delhi
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/">
                  <>
                    <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                      Others
                    </a>
                  </>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
        {/*********  Header Nav bar  ********/}

        {/* Hamburger Menu */}

        {/* Normal Menu -- Desktop View Navbar */}

        <div className="uppercase  hidden sm:hidden md:block md:w-[100%] md:rounded-lg">
          <div className="w-[80%]  m-auto flex items-center  3xl:w-[70%] 4xl:w-[60%] 5xl:w-[50%] 6xl:w-[45%]  3xl:m-auto">
          <ul className="flex items-center justify-between mr-4 p-4 sm:w-[25%] sm:ml-0 sm:text-md md:w-[100%] md:ml-2">
            <HeaderSingleElement name="Desh" />
            <HeaderSingleElement name="Haryana" />
            <HeaderSingleElement name="Shehar" />
            <HeaderSingleElement name="Crime" /> 
            <HeaderSingleElement name="Technology" />
            <HeaderSingleElement name="Delhi" />
            <HeaderSingleElement name="Delhi" />
            <HeaderSingleElement name="Delhi" />
            <HeaderSingleElement name="Delhi" />
            <HeaderSingleElement name="Delhi" />
            {/* <HeaderOthersTab /> */}

            <div className="searchBox hidden   md:block ">
              <Search  color="white" />
              
           </div>
          </ul>

          </div>

        </div>
        
      </div>
      
    </div>
  );
}



// <div className="w-auto   lg:bg-red-200 xl:bg-blue-200 font-bold ">
//         <div
//           className="flex ml-1 mr-1 md:hidden lg:flex sm:mr-1 md:mr-2 text-2xl "
//           id="search"
//         >
//           <div className="cursor-pointer">
//             <button className="text-white mt-2" onClick={handleSearch}>
//               <Search width="1.5rem" height="1.5rem"  />
//             </button>
//           </div>

//           {/* Temperature */}
//           <div className="hidden items-center text-white mx-4 justify-between sm:hidden md:hidden lg:flex">
//             <span>
//               <Sunrise />
//             </span>
//             <span className="flex">
//               <h1 className="flex">
//                 33 <DegreeCelcius />
//               </h1>
//             </span>
//           </div>
//         </div>
//         </div>