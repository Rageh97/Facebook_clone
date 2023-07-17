import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FcNews } from "react-icons/fc";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiShop } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { BsStopwatch, BsCameraVideo, BsFillFlagFill } from "react-icons/bs";
import "./HomeLeftSide.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomeLeftSide = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/sign-up");
  };
  return (
    <>
      <div className="col-md-3 d-none d-md-block">
        <ul className="homeleftside">
          <li className="d-flex align-items-center gap-15 mb-2">
            <img
              style={{ width: "25px", height: "25px", borderRadius:'50%' }}
              src={user.image}
              alt=""
            />
            <h6 className="mb-0">{user.name}</h6>
          </li>
          <li className="d-flex align-items-center gap-15 mb-4">
            <FaUserFriends className="fs-5 text-primary" />
            <h6 className="mb-0">Friends</h6>
          </li>
          <li className="d-flex align-items-center gap-15 mb-4">
            <FcNews className="fs-5" />
            <h6 className="mb-0">The recent</h6>
          </li>
          <li className="d-flex align-items-center gap-15 mb-4">
            <HiOutlineUserGroup className="fs-5 text-primary" />
            <h6 className="mb-0">Groups</h6>
          </li>
          <li className="d-flex align-items-center gap-15 mb-4">
            <CiShop className="fs-5 text-success" />
            <h6 className="mb-0">The Shop</h6>
          </li>
          <li className="d-flex align-items-center gap-15 mb-4">
            <BsStopwatch className="fs-5 text-danger" />
            <h6 className="mb-0">Memories</h6>
          </li>
          <li className="d-flex align-items-center gap-15 mb-4">
            <BsCameraVideo className="fs-5" />
            <h6 className="mb-0">Watch</h6>
          </li>
          <li className="d-flex align-items-center gap-15 mb-4">
            <BsFillFlagFill className="fs-5 text-warning" />
            <h6 className="mb-0">Pages</h6>
          </li>
          <li
            onClick={handleLogOut}
            className="d-flex align-items-center gap-15 mb-4"
          >
            <BiLogOut className="fs-5 text-dark" />
            <h6 className="mb-0">Log out</h6>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeLeftSide;
