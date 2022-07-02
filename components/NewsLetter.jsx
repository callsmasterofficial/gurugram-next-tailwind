import React from "react";

function NewsLetter() {
  return (
    <>
    <div className="bg-gray-200 md:h-[18rem] mx-auto md:m-5 ">
        <div className="m-12 md:m-4">
      <h1 className="font-semibold">News Letter</h1>
      <p className="mt-2 mb-2">
        Your email address will not be this published. Required fields are News
        Today.
      </p>
      <div className="flex">
      <input
        type="text"
        placeholder="Your email address"
        className="p-4 w-[60%] rounded-sm rounded-r-none border-none outline-none "
      />
      <button className="text-white w-[40%] bg-blue-400 rounded-sm rounded-l-none hover:bg-blue-800 hover:font-bold">
        SIGN UP
      </button>
      </div>

      <p className="mt-2">
      We hate spam as much as you do

      </p>
      </div>
      </div>
    </>
  );
}

export default NewsLetter;
