import React from "react";

export default function LeaveReply() {
  return (
    <>
      <div className="w-[90%] ninetyPercentWidth m-auto 3xl:w-[90%]  border-2 mt-3 p-3">
        <div className="bg-red-600 text-white font-bold px-2 py-1 mb-3 w-fit titleSkew -skew-x-3">
          <p>Leave a reply</p>
        </div>
        <div className="">
            <input name="userResponse" className="w-[100%] h-20 px-2 border-2 rounded-sm" placeholder="Enter your comment here..." />
            <div className="hidden">
                <p>Fill your details to proceed:- </p>
            </div>
        </div>
        <div className="btn bg-red-600 text-white text-[12px] font-bold w-fit p-3 ml-auto mt-2">
            <button className="uppercase">Post Comment</button>
        </div>
      </div>
    </>
  );
}
