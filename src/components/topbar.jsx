import { TextField } from "@mui/material";
import React from "react";
import Avatar from "../assets/images/Avatar.svg";
export const Topbar = ({ setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const acronym = localStorage.getItem("registeredName");
  return (
    <header className="flex justify-between  p-3 items-center bg-white  w-full border-b border-border_light px-[2em] max-h-[20vh] ">
      <div>
        <article className="flex flex-col gap-1 ">
          <span>Welcome Back,</span>
          <h1 className="text-2xl text-[700] upper-case ">{""}</h1>
        </article>
      </div>
      <div className=" border rounded-[8px] p-2 border-grey_1 w-[40%] ">
        <input
          type="search"
          className="w-full focus:outline-none "
          placeholder="Search"
          onChange={(e) => {
            handleSearchChange(e);
          }}
        />
      </div>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M6.66671 25.8333C6.28893 25.8333 5.97226 25.7055 5.71671 25.45C5.46115 25.1944 5.33337 24.8778 5.33337 24.5C5.33337 24.1222 5.46115 23.8055 5.71671 23.55C5.97226 23.2944 6.28893 23.1667 6.66671 23.1667H8.00004V13.8333C8.00004 11.9889 8.5556 10.35 9.66671 8.91666C10.7778 7.48332 12.2223 6.54443 14 6.09999V5.16666C14 4.6111 14.1945 4.13888 14.5834 3.74999C14.9723 3.3611 15.4445 3.16666 16 3.16666C16.5556 3.16666 17.0278 3.3611 17.4167 3.74999C17.8056 4.13888 18 4.6111 18 5.16666V6.09999C19.7778 6.54443 21.2223 7.48332 22.3334 8.91666C23.4445 10.35 24 11.9889 24 13.8333V23.1667H25.3334C25.7112 23.1667 26.0278 23.2944 26.2834 23.55C26.5389 23.8055 26.6667 24.1222 26.6667 24.5C26.6667 24.8778 26.5389 25.1944 26.2834 25.45C26.0278 25.7055 25.7112 25.8333 25.3334 25.8333H6.66671ZM16 29.8333C15.2667 29.8333 14.6389 29.5722 14.1167 29.05C13.5945 28.5278 13.3334 27.9 13.3334 27.1667H18.6667C18.6667 27.9 18.4056 28.5278 17.8834 29.05C17.3612 29.5722 16.7334 29.8333 16 29.8333ZM10.6667 23.1667H21.3334V13.8333C21.3334 12.3667 20.8112 11.1111 19.7667 10.0667C18.7223 9.02221 17.4667 8.49999 16 8.49999C14.5334 8.49999 13.2778 9.02221 12.2334 10.0667C11.1889 11.1111 10.6667 12.3667 10.6667 13.8333V23.1667Z"
              fill="#828282"
            />
          </svg>
        </button>
      </div>
      <div>
        <div className="border p-2 flex rounded-md border-border_light ">
          <img src={Avatar} className="w-[40px]" alt="img" />
          <button>
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M11.9999 15.575C11.8999 15.575 11.8082 15.5583 11.7249 15.525C11.6416 15.4917 11.5582 15.4333 11.4749 15.35L6.52491 10.4C6.39157 10.2667 6.32907 10.0875 6.33741 9.8625C6.34574 9.6375 6.41657 9.45833 6.54991 9.325C6.71657 9.15833 6.89574 9.0875 7.08741 9.1125C7.27907 9.1375 7.44991 9.21666 7.59991 9.35L11.9999 13.75L16.3999 9.35C16.5332 9.21666 16.7124 9.14166 16.9374 9.125C17.1624 9.10833 17.3416 9.18333 17.4749 9.35C17.6416 9.48333 17.7124 9.65833 17.6874 9.875C17.6624 10.0917 17.5832 10.275 17.4499 10.425L12.5249 15.35C12.4416 15.4333 12.3582 15.4917 12.2749 15.525C12.1916 15.5583 12.0999 15.575 11.9999 15.575Z"
                fill="#828282"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
