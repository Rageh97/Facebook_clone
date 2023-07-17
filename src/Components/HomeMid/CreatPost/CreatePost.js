import React from "react";
import { useState } from "react";
import Post from "./../../PostContainer/Post";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { FaSmileBeam } from "react-icons/fa";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [togle, setTogle] = useState(true);

  const handleClick = () => {
    setTogle(false);
  };

  return (
    <>
      {togle ? (
        <div className="row  home-mid-1 mb-3 bg-white">
          <div className="d-flex align-items-center p-2 border-bottom mb-3">
            <div className="col-2 d-flex align-items-center justify-content-center"></div>
            <div className="col-9">
              <input
                onClick={handleClick}
                className="w-75 input-mid-home"
                type="text"
                placeholder="what's on your mind?...."
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-around p-3">
            <div className="d-flex align-items-center gap-15">
              <h6 className="text-secondary">Live Stream</h6>
              <FaSmileBeam className="fs-5 text-warning" />
            </div>

            <div className="d-flex align-items-center gap-15">
              <h6 className="text-secondary">Live Stream</h6>
              <MdInsertPhoto className="fs-5 text-success" />
            </div>
            <div className="d-flex align-items-center gap-15">
              <h6 className="text-secondary">Live Stream</h6>
              <BsCameraVideoFill className="fs-5 text-danger" />
            </div>
          </div>
        </div>
      ) : (
        <Post />
      )}
    </>
  );
};

export default CreatePost;
