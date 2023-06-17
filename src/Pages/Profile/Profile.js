import React from "react";
import "./Profile.css";
import { AiOutlinePlus } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import CreatePost from "../../Components/HomeMid/CreatPost/CreatePost";

const Profile = () => {
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
                <img src="/images/cover-profile.jpg" alt="" />
              </div>
              <div className="d-flex flex-column align-items-start justify-content-center mx-2">
                <h4>Mohamed Rageh</h4>
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
            <div className="d-flex w-100 align-items-center justify-content-between p-2">
              <div className="d-flex gap-15 w-100">
                <CreatePost />
              </div>
            </div>
            {/* .............................................. */}
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-6">
       <Posts/>
      </div>
        </div>
      </div> */}
    </>
  );
};

export default Profile;
