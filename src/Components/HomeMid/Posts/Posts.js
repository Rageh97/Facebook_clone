import React, { useEffect } from "react";
import "../HomeMid.css";
import { BsList } from "react-icons/bs";
import { BiComment, BiShare } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import "swiper/css";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { deletePost } from "../../../RTK/PostSlice";
import { getPost,deletePost } from "../../../RTK/PostSlice";
import axios from "axios";
const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  // const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          "https://tarmeezacademy.com/api/v1/posts"
        );
        console.log(response.data.data);
        dispatch(getPost(response.data.data));
      } catch (error) {}
    };

    getPosts();
  }, []);

  return (
    <>
      {posts?.map((post) => {
        return (
          <>
            <div className="row home-mid-1 mb-3 bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <RxCross1  className="fs-5 text-secondary" />
                  <BsList className="fs-5 text-secondary" />
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="d-flex flex-column align-items-end mt-2 justify-content-end">
                    <p className="mb-0">{post?.author?.username}</p>
                    <p className="text-secondary">{post.created_at}</p>
                  </div>

                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={post.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-2">
                <p>{post?.body}</p>
                <p>{post?.title}</p>
              </div>
              <div className="mb-2">
               <img className="w-100 h-100" src={post?.image} alt="mm" /> 
              </div>
              <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <p className="mb-0 text-secondary">22 share </p>
                  <p className="mb-0 text-secondary">
                    {" "}
                    {post?.comment} comments{" "}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 text-secondary mx-2">{post?.like}</p>
                  <AiFillLike className="fs-5 text-primary" />
                  <FcLike className="fs-5 text-primary" />
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-around mb-3">
                <div className="d-flex align-items-center gap-15">
                  <p className="mb-0">Share</p>
                  <BiShare className="fs-5 text-secondary" />
                </div>
                <div className="d-flex align-items-center gap-15">
                  <p className="mb-0">Comment</p>
                  <BiComment className="fs-5 text-secondary" />
                </div>
                <div className="d-flex align-items-center gap-15">
                  <p className="mb-0">Like</p>
                  <AiOutlineLike className="fs-5 text-secondary" />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Posts;
