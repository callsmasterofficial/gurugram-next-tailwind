import React from "react";

export default function DegreeCelcius({color, height,width}) {
  return (
    <svg
      stroke={color || "currentColor"}
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={height || "1em"}
      width={width || "1em"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc />
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx={6} cy={8} r={2} />
      <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
    </svg>
  );
}
