import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Styles/RegisterLogin.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const userDetails = {
    name,
    email,
    mobile,
    password,
    repassword,
  };

  return (
    <div className="register_container">
      <Navbar />
      <div>
        <form className="form" action="">
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            autocomplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          <span>
            <input type="checkbox" /> <span>Show Password</span>
          </span>

          <input
            type="number"
            placeholder="+91 | Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input type="submit" />

          <div class="midLinks">
            By continuing, I agree to the <a href="#">Terms of Use</a> &amp;{" "}
            <a href="#">Privacy Policy</a>
          </div>

          <p>
            Already have an account? <Link to={"/user/login"}>Sign in</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
