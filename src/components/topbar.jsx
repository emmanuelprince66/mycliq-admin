import { Button, Menu, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import Avatar from "../assets/images/Avatar.svg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export const Topbar = ({ setSearchTerm }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const storedUserString = localStorage.getItem("user");
  const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const acronym = localStorage.getItem("registeredName");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logOut() {
    navigate("/");
    Cookies.remove("authToken");
    Cookies.remove("refreshToken");
    localStorage.clear();
  }

  return (
    <header className="flex justify-between  p-3 items-center bg-white  w-full border-b border-border_light px-[2em] max-h-[20vh] ">
      <div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-[500] text-primary_grey_2 text-[15px]">
            Welcome Back,
          </p>
          <p className="text-[20x] font-[600] ">
            {storedUser?.lastName} {storedUser?.firstName}
            😎
          </p>
        </div>
      </div>
      <div className=" border rounded-[8px] p-2 border-slate-300 w-[40%] ">
        <input
          type="search"
          className="w-full focus:outline-none "
          placeholder="Search"
          onChange={(e) => {
            handleSearchChange(e);
          }}
        />
      </div>
      <div className="border rounded-[8px]  border-slate-300 ">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div className="flex items-center gap-2">
            <img src={Avatar} alt="avatar" />

            <div className="flex flex-col items-start">
              <p className="text-[15x] font-[600] ">{storedUser?.lastName}</p>
              <p className="font-[500] text-slate-400 text-[13px]">
                {storedUser?.role}
              </p>
            </div>
            <KeyboardArrowDownRoundedIcon sx={{ color: "#757575" }} />
          </div>
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: "200px",
            },
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};
