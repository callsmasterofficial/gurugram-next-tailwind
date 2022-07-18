import React from "react";

export default function ShareIcon({color, height,width}) {
  return (
    <>
      <svg
        stroke={color || "currentColor"}
        fill={color || "currentColor"}
        strokeWidth={0}
        viewBox="0 0 16 16"
        height={height || "1em"}
        width={width || "1em"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
      </svg>
    </>
  );
}
