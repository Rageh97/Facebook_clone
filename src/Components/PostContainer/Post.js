import React from "react";
import "./Post.css";
import { RxCross1 } from "react-icons/rx";
import { BsEmojiSmile, BsFillFlagFill } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { useState } from "react";
import CreatePost from "../HomeMid/CreatPost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../RTK/PostSlice";
const Post = () => {
  const [togle, setTogle] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleClick = () => {
    setTogle(false);
  };
  const id = Math.floor(Math.random() * 100);
  const [inputValue, setInputValue] = useState("");
  const [image, setImg] = useState();
  function handleChange(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
  }
  const dispatch = useDispatch();
  const handlePost = () => {
    dispatch(setPost({ id, title: inputValue, image: image }));
    setInputValue("");
  };

  return (
    <>
      {togle ? (
        <div className="row  w-100 post p-3 mb-3">
          <div className="top d-flex align-items-center justify-content-between mb-2">
            <RxCross1 onClick={handleClick} className="fs-5 icon-top" />
            <h5>Create Post</h5>
            <p></p>
          </div>
          <hr />
          <div className="mid">
            <div className="d-flex gap-15">
              <div>
                {/* <img
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={user.image}
                  alt=""
                /> */}
                {user ? (
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={user.image}
                    alt=""
                  />
                ) : (
                  <img
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                
                    src="/images/trika.jpg"
                    alt=""
                  />
                )}
              </div>
              <div>
                <h6>{user?.name ? user.name : "Mohamed Rageh"}</h6>
                <p>friends</p>
              </div>
            </div>
            <div className="input-mid">
              <input
                type="text"
                placeholder="whats on your mind mohamed?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div style={{ height: "300px" }} className="w-100 chooseImg mb-3">
              <img
                style={{ objectFit: "contain" }}
                className="w-100 h-100"
                src={image}
                alt=""
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <BsEmojiSmile className="fs-5" />
              <BiColorFill className="fs-5" />
            </div>
          </div>
          <div className="bottom">
            <div className="d-flex align-items-center justify-content-between AddPost">
              <p>Add to post</p>
              <div className="d-flex gap-15">
                <BsEmojiSmile className="fs-5 text-warning" />
                <BsFillFlagFill className="fs-5 text-info" />
                <ImLocation className="fs-5 text-danger" />
                <FaUserFriends className="fs-5 text-primary" />
                <input
                  accept="image/"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <label htmlFor="select-image">
                  <MdInsertPhoto className="fs-5 text-success mb-2" />
                </label>
              </div>
            </div>
            <div>
              <button onClick={handlePost} className="btn btn-primary w-100">
                post
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CreatePost />
      )}
    </>
  );
};

export default Post;
