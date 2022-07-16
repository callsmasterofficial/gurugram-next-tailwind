import React from "react";

export default function VideoIcon({color, height,width}) {
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
        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" />
      </svg>
    </>
  );
}
