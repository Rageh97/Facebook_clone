import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdInsertPhoto } from "react-icons/md";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  function handleChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  const navigate = useNavigate()
  const user = { username, name, password, email, image };

  
  // const handleRegisterSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "https://tarmeezacademy.com/api/v1/register",
  //       { username, email, name, password, image },
  //       { withCredentials: true }
  //     );

  //     console.log(response.data.user); // Do something with the response

  //     if (response.status === 200) {
  //       const token = response.data.token;

  //       // Save the authentication token in localStorage
  //       localStorage.setItem("token", JSON.stringify(token));

  //       // Save the form data in localStorage
  //       localStorage.setItem("formData", JSON.stringify(formData));

  //       // Redirect to the sign-in page or any other desired page
  //       window.location.href = "/sign-in";
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 422) {
  //       // Handle validation errors, e.g., display error messages to the user
  //       toast.error("Incorrect data!", {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // };

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (username !== "" && name !== "" && password !== "") {
      localStorage.setItem("user", JSON.stringify(user));
      navigate('/sign-in')
    } else {
      toast.error("please fill data !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="section-register">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-10 d-flex align-items-center justify-content-center">
              <form
                onSubmit={handleRegisterSubmit}
                className="form-register  w-75 d-flex flex-column p-4 gap-15"
              >
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
                  className="btn btn-primary"
                  type="submit"
                  // disabled={loading}
                >
                  Sign Up
                </button>
                {/* ............................................ */}
                {/* {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>} */}

                <hr />
                <button className="btn btn-success p-2">
                  Already have account ?
                  <Link to="/" className="text-white mx-2">
                    Sign in
                  </Link>
                </button>
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
              </form>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
