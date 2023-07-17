import React from "react";
import {
  BsFillBellFill,
  BsMessenger,
  BsList,
  BsBagCheckFill,
  BsSearch,
} from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const active = "text-primary mid-icons";
  const unactive = "text-secondary mid-icons";
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <>
      <header className="d-block d-md-flex align-items-center justify-content-between p-2 mb-4">
        <div className="header-right col-12 col-md-3 d-flex align-items-center justify-content-between mx-2 mx-md-5 mb-3 mb-md-0">
          <div className="facebook-logo d-flex align-items-center">
            <img
              onClick={() => navigate("/")}
              className="w-100 me-2"
              src="images/Facebook_Logo_2.png"
              alt="facebook-logo"
            />
            <p className="mb-0 d-non d-md-none">Facebook</p>
          </div>
          <div className="facebook-search  d-flex align-items-center ">
            <BsMessenger />
            <BsSearch className="mx-2" />
            <input type="text" placeholder="search in facebook" />
          </div>
        </div>
        <div className="header-mid col-12 col-md-3 d-flex align-items-center justify-content-around">
          {user ? (
            <img
              onClick={() => navigate("/profile/:username")}
              className="d-block d-md-none"
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src={user.image}
              alt=""
            />
          ) : (
            <img
              onClick={() => navigate("/profile/:username")}
              className="d-block d-md-none"
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src="/images/trika.jpg"
              alt=""
            />
          )}
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
        {user ? (
          <div className="header-left d-none d-md-flex col-3 d-flex align-items-center justify-content-center gap-15 ">
            <div className="left-icons-img">
              <img
                style={{ borderRadius: "50%" }}
                className="w-100"
                src={user.image}
                alt=""
              />
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
        ) : (
          <div>
            <button
              onClick={() => navigate("/sign-in")}
              className="btn btn-primary text-white mx-2"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              className="btn btn-primary text-white mx-2"
            >
              Register
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
