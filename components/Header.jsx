import React, { useState } from "react";
import HeaderSingleElement from "./HeaderSingleElement";
import HeaderOthersTab from "./HeaderOthersTab";
import { Search, User, DegreeCelcius, Sunrise,CloseButton } from "./icons";
import NextLink from "next/link"

export default function Header() {
  const [sidebar, setSidebar]=useState(false);
  const handleSidebar = ()=>{
    setSidebar(!sidebar);
  }
  return (
    <>
      {/* Header,Logo & Banner */}
      <div className="relative md:flex md:items-center">
        <div className="flex items-center justify-between" id="logo">
          <img
            src="assets/Images/Gurugram-News-Logo.jpg"
            alt="gurugram-news-network"
            className="w-40 mx-4"
          />

          <h1 className="text-3xl uppercase mx-4">Gurugram News Network</h1>
        </div>
        <div className="w-100% md:w-[70%] p-2 cursor-pointer" id="appOrAds">
          <img
            src="assets/Images/Gurugram-News-Banner.jpg"
            alt="gurugram-news-app-Banner"
          />
        </div>
      </div>
      {/* Nav Bar */}
      <div className="flex items-center justify-between sm:p-2 md:p-1" id="nav">

        {/* Sidebar Toggle */}
        <div className={sidebar ? "m-4 p-2 z-50 opacity-0 rounded-md cursor-pointer md:hidden hover:bg-slate-200":"m-4 p-2 z-50 rounded-md cursor-pointer md:hidden hover:bg-slate-200"} onClick={handleSidebar}>
          <div className="w-4 h-1 bg-black mt-1 mb-1 transition-all duration-100 rounded-md"></div>
          <div className="w-6 h-1 bg-black mt-1 mb-1 transition-all duration-100 rounded-md"></div>
          <div className="w-4 h-1 bg-black mt-1 mb-1 transition-all duration-100 rounded-md"></div>
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
                ? "bg-white duration-300 z-50 fixed inset-y-0 py-4 left-0 transition-right w-64 md:hidden"
                : "bg-white duration-500 z-50 fixed inset-y-0 py-4 -left-full transition-right w-64 md:hidden"
            }
          >
            {/* sidebar close button */}
            <button
              className="absolute -right-8 p-1 md:hidden bg-white rounded-full text-gray-700 top-1 transition hover:bg-red-400"
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
                    home
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    pages
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    posts
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    categories
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    world
                  </a>
                </NextLink>
              </li>
              <li onClick={handleSidebar}>
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                    sports
                  </a>
                </NextLink>
              </li>
              <li>
                <NextLink href="/">
                  <>
                    <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                      others
                    </a>
                    {/* <ul>
                      <li>one</li>
                      <li>two</li>
                      <li>three</li>
                    </ul> */}
                  </>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
        {/*********  Header Nav bar  ********/}

        {/* Hamburger Menu */}

        {/* Normal Menu */}
        <div className="uppercase hidden sm:hidden md:block">
          <ul className="flex ml-12 p-4 sm:w-[25%] sm:ml-0 sm:text-md md:w-[60%] md:ml-12">
            <HeaderSingleElement name="home" />
            <HeaderSingleElement name="pages" />
            <HeaderSingleElement name="posts" />
            <HeaderSingleElement name="categories" />
            <HeaderSingleElement name="world" />
            <HeaderSingleElement name="sports" />
            <HeaderOthersTab />
          </ul>
        </div>
        <div
          className="flex  md:hidden lg:flex mx-4 text-2xl"
          id="search"
        >
          <Search />

          <div className="ml-6" id="user_profile">
            <User />
          </div>
          {/* Language Selector */}
          <div className="hidden mx-2 sm:hidden sm:text-sm md:hidden md:text-lg lg:block">
            <select className="rounded-sm p-2">
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Pashto">Pashto</option>
            </select>
          </div>
          {/* Temperature */}
          <div className="hidden items-center mx-4 justify-between sm:hidden md:hidden lg:flex">
            <span>
              <Sunrise />
            </span>
            <span className="flex">
              <h1 className="flex">
                33 <DegreeCelcius />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
