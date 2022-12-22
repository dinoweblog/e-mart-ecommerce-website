import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../API";
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
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { URL } = useSelector((state) => state.visitURL);
  const userDetails = {
    email,
    password,
  };

  useEffect(() => {
    document.title = "Login | e-mart shopping platform";
  }, []);

  const getLogedin = (event) => {
    event.preventDefault();
    dispatch(loginLoading());

    fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setMsg(res.message);
        } else {
          dispatch(
            loginSuccess({
              token: res.token,
              user: res.user,
              userId: res.user._id,
            })
          );
          dispatch(loginAuthenticated("true"));
          dispatch(getCartProductsData(res.user._id, res.token));
          navigate(URL);
        }
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
            className={msg ? "border_color" : ""}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={msg ? "border_color" : ""}
            type={showPass ? `password` : "text"}
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>{msg}</p>

          <span>
            <input
              type="checkbox"
              onClick={() => {
                setShowPass(!showPass);
              }}
            />{" "}
            <span>Show Password</span>
          </span>

          <input type="submit" value="Login" />

          <div className="term_privacy">
            By continuing, I agree to the <a href="#">Terms of Use</a> &amp;{" "}
            <a href="#">Privacy Policy</a>
          </div>

          <div className="login_redirect_link">
            Are you a new user? <Link to={"/user/register"}>Sign up</Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};
