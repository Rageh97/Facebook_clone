import React from "react";
import "./HomeRightSide.css";
import { Usersonline } from "../../Data";
const HomeRightSide = () => {
  return (
    <>
      <div className="col-3">
        <div className="homerightside d-flex flex-column align-items-center justify-content-center">
          <h5 className="mb-4 me-5 text-secondary">Contacts</h5>
          <ul>
            {Usersonline.map((user) => {
              return (
                <>
                  <li key={user.id} className="d-flex align-items-center gap-15 mb-2">
                    <img
                      style={{ width: "25px", height: "25px", borderRadius:"50%"}}
                      src={user.profilePicture}
                      alt=""
                    />
                    <h6 className="mb-0">{user.name}</h6>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeRightSide;
