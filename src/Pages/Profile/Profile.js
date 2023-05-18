import React from "react";
import "./Profile.css";
import {AiOutlinePlus} from "react-icons/ai"
import { CiEdit } from "react-icons/ci";
import Post from "../../Components/PostContainer/Post";
import Posts from "../../Components/HomeMid/Posts/Posts";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="bg-white profile-1 mb-2">
      
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-10">
              <div className="profile-cover">
                <img src="/images/cover-profile.jpg" alt="nnnnnnnn" />
              </div>

              <div className="row d-flex">
                <div className="col-7 d-flex align-items-center gap-15">
                  <div className="mt-5">
                  <button className="btn edit-button p-2">Edit your profile <CiEdit/></button>
                  </div>
                  <div className="mt-5">
                    <button className="btn btn-primary p-2">Add to story <AiOutlinePlus/></button>
                  </div>
                </div>
                <div className="col-5 d-flex">
                  <div className="d-flex flex-column align-items-end justify-content-center mx-2">
                  <h4>Mohamed Rageh</h4>
                  <p>1000 friend</p>
                  <div>
                    <img style={{width:'30px', height:'30px', borderRadius:'50%', }} src="/images/profile-img.jpg" alt="" />
                    <img style={{width:'30px', height:'30px', borderRadius:'50%' }} src="/images/profile-img.jpg" alt="" />
                    <img style={{width:'30px', height:'30px', borderRadius:'50%'}} src="/images/profile-img.jpg" alt="" />
                    <img style={{width:'30px', height:'30px', borderRadius:'50%' }} src="/images/profile-img.jpg" alt="" />
                    <img style={{width:'30px', height:'30px', borderRadius:'50%'}} src="/images/profile-img.jpg" alt="" />
                  </div>
                  </div>
                  <div className="profile-pic">
                    <img src={user.img} alt="" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between p-2">
                <div>mmmm</div>
                <div className="d-flex gap-15">
                  <h6>posts</h6>
                  <h6>posts</h6>
                  <h6>posts</h6>
                  <h6>posts</h6>
                  <h6>posts</h6>
                  <h6>posts</h6>
                  <h6>posts</h6>
                </div>
              </div>
              {/* .............................................. */}
            </div>
          </div>
        </div>
       
      </div>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
       <div className="col-6">
       <Posts/>
       </div>
        </div>
      </div>
     
   
    </>
  );
};

export default Profile;
