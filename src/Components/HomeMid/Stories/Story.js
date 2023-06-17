import React from "react";
import "../HomeMid";
import { BsBook } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Story = () => {
  return (
    <div className="row home-mid-1 mb-3 bg-white">
      <div className="d-flex align-items-center justify-content-around p-2">
        <div className="d-flex align-items-center gap-15">
          <h4 className="text-secondary">Rails</h4>
          <BiMovie className="fs-5" />
        </div>
        <div className="d-flex align-items-center gap-15">
          <h4 className="text-primary">Story</h4>
          <BsBook className="fs-5 text-primary" />
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="mb-3">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-3 ">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-2.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-3 ">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-3 ">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-3 ">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-3 ">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-2.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-3 ">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="mb-3 ">
            <img
              className="rounded"
              style={{ width: "150px", height: "200px" }}
              src="images/slide-4.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Story;
