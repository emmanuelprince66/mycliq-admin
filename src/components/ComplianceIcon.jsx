import React, { useEffect, useState } from "react";

const ComplianceIcon = ({ isRightLink }) => {
  const [color, setColor] = useState("#828282");

  useEffect(() => {
    if (isRightLink) {
      setColor("white");
    } else {
      setColor("#828282");
    }
  }, [isRightLink]);

  return (
    <>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 3V9C10 10.105 7.985 11 5.5 11C3.015 11 1 10.105 1 9V3"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 6C10 7.105 7.985 8 5.5 8C3.015 8 1 7.105 1 6M15 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V7M7 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V15M10 3C10 4.105 7.985 5 5.5 5C3.015 5 1 4.105 1 3C1 1.895 3.015 1 5.5 1C7.985 1 10 1.895 10 3Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 16C17.8807 16 19 14.8807 19 13.5C19 12.1193 17.8807 11 16.5 11C15.1193 11 14 12.1193 14 13.5C14 14.8807 15.1193 16 16.5 16Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 21H12C12 20.4091 12.1164 19.8239 12.3425 19.2779C12.5687 18.732 12.9002 18.2359 13.318 17.818C13.7359 17.4002 14.232 17.0687 14.7779 16.8425C15.3239 16.6164 15.9091 16.5 16.5 16.5C17.0909 16.5 17.6761 16.6164 18.2221 16.8425C18.768 17.0687 19.2641 17.4002 19.682 17.818C20.0998 18.2359 20.4313 18.732 20.6575 19.2779C20.8836 19.8239 21 20.4091 21 21Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ComplianceIcon;
