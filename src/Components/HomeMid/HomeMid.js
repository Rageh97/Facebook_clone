import React from "react";
import "./HomeMid.css";
import Story from './Stories/Story';
import Posts from "./Posts/Posts";
import CreatePost from "./CreatPost/CreatePost";
const HomeMid = () => {
  return (
    <>
      <div className="col-md-6">
        <Story/>
        <CreatePost/>
        <Posts/>
      </div>
    </>
  );
};

export default HomeMid;
