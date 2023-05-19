import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { getUser } from "../../RTK/AuthSLice";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";
import axios from "axios";
import {
  loginSuccess,
  loginRequest,
  loginFailure,
} from "../../RTK/AuthSLice";
const SignIN = () => {
  const user = useSelector((state) => state.auth.user);

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const handleSignIN = () => {
  //   if (email === "" || password === "") {
  //     toast.error("please fill all data !", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   } else {
  //     if (email === user.email && password === user.password) {
  //       navigate("/");
  //     } else {
  //       toast.error("email or password is wrong !", {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //     }
  //   }
  // };

  const handleLogin = async () => {
    dispatch(loginRequest());

    try {
      const response = await axios.post(
        'https://tarmeezacademy.com/api/v1/login',
        { userName, password },
        {
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
          },
        }
      );
      const { token, user } = response.data;

      // Store the token in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Update the user in the Redux store
      dispatch(loginSuccess(user));

      // Redirect to a protected route or the home page
      navigate('/');
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <>
      <ToastContainer />
      <section className="section-login">
        <p>{user.username}</p>
       <img src={user.img} alt="ffff" srcset="" />
        
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center justify-content-center">
              <div className="form-login w-75 d-flex flex-column p-4 gap-15">
                <input
                  className="form-control  p-2"
                  placeholder="Enter username"
                  type="email"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="form-control  p-2"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin} className="btn btn-primary p-2 ">
                  Log in
                </button>
                <Link className="text-center">Forget password ?</Link>
                <hr />
                <button className="btn btn-success p-2">
                  Not have account ?
                  <Link to="/sign-up" className="text-white mx-2">
                    Sign up
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-6 d-flex flex-column gap-15 ">
              <h1 className="text-primary">Facebook</h1>
              <h5>
                Facebook gives you the ability to connect with people <br /> and
                share what you want with them.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIN;
