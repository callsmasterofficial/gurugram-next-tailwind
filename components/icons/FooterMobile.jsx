import React from "react";

export default function FooterMobile({color, height,width}) {
  return (
    <>
      <svg
        stroke={color || "currentColor"}
        fill={color || "currentColor"}
        strokeWidth={0}
        viewBox="0 0 10 16"
        height={height || "1em"}
        width={width || "1em"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"
        />
      </svg>
    </>
  );
}
