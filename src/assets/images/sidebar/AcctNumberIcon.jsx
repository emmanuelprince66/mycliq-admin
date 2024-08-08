import React from "react";

const AcctNumberIcon = ({ isRightLink }) => {
  return (
    <>
      <svg
        width="24"
        height="17"
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8.5C16 7.83696 16.2634 7.20107 16.7322 6.73223C17.2011 6.26339 17.837 6 18.5 6C19.163 6 19.7989 6.26339 20.2678 6.73223C20.7366 7.20107 21 7.83696 21 8.5C21 9.16304 20.7366 9.79893 20.2678 10.2678C19.7989 10.7366 19.163 11 18.5 11C17.837 11 17.2011 10.7366 16.7322 10.2678C16.2634 9.79893 16 9.16304 16 8.5ZM13 0V17H24V0H13ZM22 13C20.9 13 20 13.9 20 15H17C17 14.4696 16.7893 13.9609 16.4142 13.5858C16.0391 13.2107 15.5304 13 15 13V4C16.11 4 17 3.11 17 2H20C20 2.53043 20.2107 3.03914 20.5858 3.41421C20.9609 3.78929 21.4696 4 22 4V13ZM7 3C8.1 3 9 3.9 9 5C9 6.1 8.1 7 7 7C5.9 7 5 6.1 5 5C5 3.9 5.9 3 7 3ZM7 1C4.79 1 3 2.79 3 5C3 7.21 4.79 9 7 9C9.21 9 11 7.21 11 5C11 2.79 9.21 1 7 1ZM7 11C3.13 11 0 12.79 0 15V17H11V15H2C2 14.42 3.75 13 7 13C8.83 13 10.17 13.45 11 13.95V11.72C9.87 11.27 8.5 11 7 11Z"
          fill={isRightLink ? "white" : "#828282"}
        />
      </svg>
    </>
  );
};

export default AcctNumberIcon;