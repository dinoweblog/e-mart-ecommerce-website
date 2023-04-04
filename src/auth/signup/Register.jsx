import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../API";
import "../Styles/RegisterLogin.css";
import { Navbar } from "../../Components/header/Navbar";

export const Register = () => {
  const [showPass, setShowPass] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errorMsg, setErrorMsg] = useState([]);
  const [msg, setMsg] = useState("");
  const [nameE, setnameE] = useState("");
  const [emailE, setemailE] = useState("");
  const [passE, setpassE] = useState("");
  const [repassE, setrepassE] = useState("");
  const [mobE, setmobE] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register | e-mart shopping platform";
  }, []);
  useEffect(() => {
    allErrorHandler();
  }, [msg, errorMsg]);

  const userDetails = {
    name,
    email,
    mobile,
    password,
    repassword,
  };

  const getRegister = (event) => {
    event.preventDefault();

    fetch(`${API_URL}/register`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setErrorMsg(res.error);
        setMsg(res.message);
        setrepassE(res.re_message);
        allErrorHandler();
        !res.error && !res.message && !res.re_message
          ? navigate("/user/login")
          : navigate("/user/register");
      })

      .catch((error) => console.log(error));
  };

  const allErrorHandler = () => {
    setnameE("");
    setemailE("");
    setmobE("");
    setpassE("");
    if (errorMsg) {
      errorMsg.map((e) => {
        if (e.field == "name") setnameE(e.message);
        if (e.field == "email") setemailE(e.message);
        if (e.field == "mobile") setmobE(e.message);
        if (e.field == "password") setpassE(e.message);
      });
    }
  };
  console.log("Error", mobile);
  console.log("message", mobile + 1);

  return (
    <div className="register_container">
      <Navbar />
      <div>
        <form onSubmit={getRegister} className="form" action="">
          <h2>Signup</h2>
          <input
            className={nameE ? "border_color" : ""}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>{nameE}</p>
          <input
            className={emailE || msg ? "border_color" : ""}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailE}</p>
          <input
            className={passE ? "border_color" : ""}
            type={showPass ? `password` : "text"}
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{passE}</p>
          <span>
            <input
              type="checkbox"
              onClick={() => {
                setShowPass(!showPass);
              }}
            />{" "}
            <span>Show Password</span>
          </span>
          <input
            className={repassE ? "border_color" : ""}
            type={showPass ? `password` : "text"}
            placeholder="Confirm Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          <p>{repassE}</p>
          <input
            className={mobE ? "border_color" : ""}
            id="mobile_input_feild"
            type="text"
            size="10"
            maxLength="10"
            placeholder="+91 | Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(Number(e.target.value))}
          />

          {mobE ? <p>{mobE}</p> : <p>{msg}</p>}
          <input type="submit" value="Signup" />

          <div className="term_privacy">
            By continuing, I agree to the <a href="#">Terms of Use</a> &amp;{" "}
            <a href="#">Privacy Policy</a>
          </div>

          <div className="login_redirect_link">
            Already have an account? <Link to={"/user/login"}>Sign in</Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};
