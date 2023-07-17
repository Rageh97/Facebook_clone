import React from "react";
import "./Profile.css";
import { AiFillLike, AiOutlineLike, AiOutlinePlus } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import CreatePost from "../../Components/HomeMid/CreatPost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { BiComment, BiShare } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { deletePost } from "../../RTK/PostSlice";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.userPosts);
  return (
    <>
      <div className="container">
        <div className="bg-white profile-1 mb-2">
          <div className="row">
            <div className="profile-cover h-md-100 h-75">
              <img src="/images/cover-profile.jpg" alt="nnnnnnnn" />
            </div>

            <div className="col-md-5 d-flex justify-content-center">
              <div className="profile-pic">
                {user ? (
                  <img src={user.image} alt="" />
                ) : (
                  <img src="/images/trika.jpg" alt="" />
                )}
              </div>
              <div className="d-flex flex-column align-items-start justify-content-center mx-2">
                <h4>{user?.name ? user.name : "Mohamed Rageh"}</h4>
                <p>1000 friend</p>
                <div>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    src="/images/profile-img.jpg"
                    alt=""
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    src="/images/profile-img.jpg"
                    alt=""
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    src="/images/profile-img.jpg"
                    alt=""
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    src="/images/profile-img.jpg"
                    alt=""
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    src="/images/profile-img.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" col-md-6 mb-4 mx-2 d-flex align-items-center justify-content-center gap-15">
              <div className="mt-5">
                <button className="btn edit-button p-2">
                  Edit your profile <CiEdit />
                </button>
              </div>
              <div className="mt-5">
                <button className="btn btn-primary p-2">
                  Add to story <AiOutlinePlus />
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex w-100 align-items-center justify-content-between p-2"></div>
            {/* .............................................. */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="mx-3 w-100">
              <CreatePost />
            </div>
            {posts?.map((post, index) => {
              return (
                <>
                  <div key={index} className="home-mid-1 mt-5 mb-3 bg-white">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-15">
                        <RxCross1
                          onClick={() => dispatch(deletePost(post.id))}
                          className="fs-3  text-secondary"
                        />
                        <BsList className="fs-3  text-secondary" />
                      </div>
                      <div className="d-flex p-2 align-items-center gap-15">
                        <div className="d-flex flex-column align-items-end mt-2 justify-content-end">
                          <p className="mb-0">{user.name}</p>
                          <p className="text-secondary">67358763</p>
                        </div>

                        <img
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                          src={user.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="mt-2 mx-3">
                      <p>{post?.title}</p>
                      <p>{post?.title}</p>
                    </div>
                    {post.image ? (
                      <div style={{ height: "400px" }} className="mb-2 mx-2">
                        <img
                          className="w-100 h-100"
                          src={post?.image}
                          alt="mm"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="mx-2 d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-15">
                        <p className="mb-0 text-secondary">22 share </p>
                        <p className="mb-0 text-secondary">
                          {" "}
                          {post?.comment} comments{" "}
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-secondary mx-2">65</p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
