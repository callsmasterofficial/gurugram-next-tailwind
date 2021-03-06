import React from "react";

export default function HeaderOthersTab() {
  return (
    <div className="sm:w-[50%] z-50">
      <div className="group inline-block relative">
        <button className=" text-white font-semibold inline-flex items-center">
          <span className="mr-4 uppercase">अन्य </span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
          <li className="">
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              One
            </a>
          </li>
          <li className="">
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Two
            </a>
          </li>
          <li className="">
            <a
              className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Three is the magic number
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
