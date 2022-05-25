import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartProductsData } from "../Redux/Cart/action";
import {
  getLogedin,
  loginAuthenticated,
  loginError,
  loginLoading,
  loginSuccess,
} from "../Redux/Login/action";
import { Navbar } from "./Navbar";
import "./Styles/RegisterLogin.css";

export const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = {
    email,
    password,
  };

  const getLogedin = (event) => {
    event.preventDefault();
    dispatch(loginLoading());

    fetch(`https://emart-server.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(
          loginSuccess({
            token: res.token,
            user: res.user,
            userId: res.user._id,
          })
        );
        dispatch(loginAuthenticated("true"));
        dispatch(getCartProductsData(res.user._id, res.token));
      })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => dispatch(loginError()));
  };

  return (
    <div className="register_container login_container">
      <Navbar />
      <div>
        <form onSubmit={getLogedin} className="form" action="">
          <h2>Login</h2>

          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            type={showPass ? `password` : "text"}
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span>
            <input
              type="checkbox"
              onClick={() => {
                setShowPass(!showPass);
              }}
            />{" "}
            <span>Show Password</span>
          </span>

          <input type="submit" />

          <div className="term_privacy">
            By continuing, I agree to the <a href="#">Terms of Use</a> &amp;{" "}
            <a href="#">Privacy Policy</a>
          </div>

          <p className="login_redirect_link">
            Are you a new user? <Link to={"/user/register"}>Sign up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
