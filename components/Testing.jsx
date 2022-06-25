import React,{ useState} from 'react';
import NextLink from 'next/link';
import {Hamburger,CloseButton} from "./icons"

export default function Testing() {
  const [sidebar, setSidebar]=useState(false);
  const handleSidebar = ()=>{
    setSidebar(!sidebar);
  }
  return (
    <>
      {/* navbar */}
      <div className="bg-blue-500 fixed flex h-14 inset-x-0 items-center justify-between px-4 shadow-lg text-white top-0">
        {/* navbar logo */}
        <div className="">
          Not Science Lab
        </div>
        {/* navbar open sidebar button */}
        <button className="p-2 rounded-full transition hover:bg-blue-400" onClick={handleSidebar}>
          <Hamburger />
        </button>
      </div>
      {/* sidebar container */}
      <div>
        {/* sidebar overlay */}
        <div className={sidebar ? 'bg-black cursor-pointer fixed inset-0 opacity-60 visible' : 'hidden opacity-0'} onClick={handleSidebar}></div>
        {/* sidebar */}
        <div className={sidebar ? "bg-white duration-300 fixed inset-y-0 py-4 right-0 transition-right w-64": "bg-white duration-500 fixed inset-y-0 py-4 -right-full transition-right w-64"}>
          {/* sidebar close button */}
          <button className="absolute -left-8 p-1  bg-white rounded-full text-gray-700 top-1 transition hover:bg-red-400" onClick={handleSidebar}>
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
                  blog
                </a>
              </NextLink>
            </li>
            <li onClick={handleSidebar}>
              <NextLink href="/">
                <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  download
                </a>
              </NextLink>
            </li>
            <li onClick={handleSidebar}>
              <NextLink href="/">
                <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100">
                  contact
                </a>
              </NextLink>
            </li>

          </ul>
        </div>
      </div>
    </>
  )
}
