import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { signUp } from "../../RTK/AuthSLice";
import { MdInsertPhoto } from "react-icons/md";
import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../../RTK/AuthSLice";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  function handleChange(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
  }

  const handleRegister = async () => {
    dispatch(registerRequest());

    try {
      const response = await axios.post(
        "https://tarmeezacademy.com/api/v1/register",
        {
          name,
          username,
          password,
          email,
          img,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers as needed
          },
        }
      );
      console.log(response.data.user);
      dispatch(registerSuccess(response.data.user));
      navigate("/sign-in"); // Redirect to login page after successful registration
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };
  // const dispath = useDispatch();
  // const navigate = useNavigate();
  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   if (
  //     firstName === "" ||
  //     lastName === "" ||
  //     email === "" ||
  //     password === ""
  //   ) {
  //     toast.error("please fill all data !", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   } else {
  //     dispath(signUp({ firstName, lastName, email, password, img }));
  //     navigate("/sign-in");
  //   }
  // };
  return (
    <>
      <ToastContainer />
      <section className="section-register">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-10 d-flex align-items-center justify-content-center">
              <div className="form-register w-75 d-flex flex-column p-4 gap-15">
                <input
                  className="form-control  p-2"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="user name"
                  type="text"
                />
                <input
                  className="form-control  p-2"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="name"
                  type="text"
                />
                <input
                  className="form-control  p-2"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your email"
                  type="email"
                />
                <input
                  className="form-control  p-2"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter your password"
                  type="password"
                />

                <button
                  onClick={handleRegister}
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  Sign Up
                </button>
                {/* ............................................ */}
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                <hr />
                <button className="btn btn-success p-2">
                  Already have account ?
                  <Link to="/" className="text-white mx-2">
                    Sign in
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-md-10">
              <div className="d-flex flex-column align-items-center justify-content-center gap-15">
                <input
                  accept="image/"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <label htmlFor="select-image">
                  <MdInsertPhoto className="fs-5 text-success mb-2" />
                  Choose your picture
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
