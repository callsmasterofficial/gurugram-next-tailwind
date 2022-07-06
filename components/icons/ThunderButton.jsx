import React from "react";

function ThunderButton({color, height,width}) {
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
        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
      </svg>
    </>
  );
}

export default ThunderButton;
