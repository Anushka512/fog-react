import React, { useEffect } from "react";
import { useState } from "react";
import "./Login.scss";
import login from "../../Assets/Images/login.png";
import signup from "../../Assets/Images/signup.png";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
// import { getRegisterUser } from "../../Redux/Slices/user"
import { createUser, getLoggedInrUser } from "../../Redux/slices/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { status, isAuthenticated, error } = useSelector((state) => state.user);

  const handleSignup = (e) => {
    e.preventDefault();

    dispatch(
      createUser({
        name: userName,
        password,
        email,
      })
    );
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    dispatch(
      getLoggedInrUser({
        email: email,
        password,
      })
    );
  };

  useEffect(() => {
    if (status) {
      Swal.fire({
        timer: 2500,
        title: "Succesfully Registered",
        icon: "success",
      });

      setEmail("");
      setPassword("");
      setUserName("");
    }
    if (isAuthenticated) {
      Swal.fire({
        timer: 2500,
        title: "Succesfully Logged In",
        icon: "success",
      });

      setEmail("");
      setPassword("");
      setUserName("");

      navigate("/");
    }

    if (error) {
      Swal.fire({
        timer: 2500,
        title: error,
        icon: "error",
      });

      dispatch({
        type: "user/clearError",
      });
    }
  }, [status, isAuthenticated, error]);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container__login ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-fields">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn_cart" onClick={handleSignIn}>
              Sign In
            </button>
            <p className="social-text">Or Sign In with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-fields">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="Username"
                placeholder="Username"
              />
            </div>
            <div className="input-fields">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="input-fields">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" onClick={handleSignup} className="btn_cart">
              Sign Up
            </button>

            <p className="social-text">Or Sign Up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt sequi soluta adipisci molestiae minima pariatur sapiente
              ipsum ab vitae!
            </p>
            <button
              className="btn cart transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>

          <img src={signup} alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt sequi soluta adipisci molestiae minima pariatur sapiente
              ipsum ab vitae!
            </p>
            <button
              className="btn cart transparent"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>

          <img src={login} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}
export default Login;
