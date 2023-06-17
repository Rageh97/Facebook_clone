import React from "react";
import {
  BsFillBellFill,
  BsMessenger,
  BsList,
  BsBagCheckFill,
  BsSearch,
  
} from "react-icons/bs";
import {
  IoIosNotifications
} from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const active = "text-primary mid-icons";
  const unactive = "text-secondary mid-icons";
  return (
    <>
      <header className="d-block d-md-flex align-items-center justify-content-between p-2 mb-4">
        <div className="header-right col-12 col-md-3 d-flex align-items-center justify-content-between mx-5 ">
          <div className="facebook-logo d-flex align-items-center">
            <img
              className="w-100 me-2"
              src="images/Facebook_Logo_2.png"
              alt="facebook-logo"
            />
            <p className="mb-0 d-block d-md-none">Facebook</p>
          </div>
          <div className="facebook-search d-flex align-items-center ">
            <BsMessenger/>
            <BsSearch className="mx-2" />
            <input type="text" placeholder="search in facebook" />
          </div>
        </div>
        <div className="header-mid col-12 col-md-3 d-flex align-items-center justify-content-around">
        <img className="d-block d-md-none" style={{width:'30px', height:'30px', borderRadius:'50%'}} src="images/profile-img.jpg" alt="" />
          <NavLink
            className={({ isActive }) => (isActive ? active : unactive)}
            to="/games"
          >
            {" "}
            <IoIosNotifications />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : unactive)}
            to="/market"
          >
            {" "}
            <BsBagCheckFill />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : unactive)}
            to="/profile/:username"
          >
            <FaUserCircle />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : unactive)}
            to="/"
          >
            <AiFillHome />
          </NavLink>
        
        </div>
        <div className="header-left d-none d-md-flex col-3 d-flex align-items-center justify-content-center gap-15 ">
          <div className="left-icons-img">
            <img className="w-100" src="images/profile-img.jpg" alt="" />
          </div>
          <div className="left-icons p-2">
            <BsFillBellFill className="fs-5" />
          </div>
          <div className="left-icons p-2">
            {" "}
            <BsMessenger className="fs-5" />
          </div>
          <div className="left-icons p-2">
            <BsList className="fs-5" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
