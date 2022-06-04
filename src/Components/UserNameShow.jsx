import "./Styles/UserNameShow.css";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

let count = 1;
export const UserNameShow = ({ name }) => {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    if (isAuthenticated === "true" && count === 1) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      count = 2;
    }, 3000);
  }, []);

  if (!show) {
    return <div>Hello</div>;
  }

  return (
    <div className="massage_card sticker">
      <p>Welcome {name}</p>
      <button>
        <FiX style={{ fontSize: "2rem", color: "#282c3f" }} />
      </button>
    </div>
  );
};
