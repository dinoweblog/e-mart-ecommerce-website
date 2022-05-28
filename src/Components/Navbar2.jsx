import { Link } from "react-router-dom";
import "./Styles/Checkout.css";

export const Navbar2 = ({ ctc, atc, paytc }) => {
  return (
    <header className="checkout_header">
      <div>
        <div>
          <div className="logo2">
            <Link to={"/"}>e-Mart</Link>
          </div>
        </div>
        <div className="steps">
          <ul>
            <li style={{ color: `${ctc}`, borderColor: `${ctc}` }}>CART</li>
            <li style={{ color: `${atc}`, borderColor: `${atc}` }}>ADDRESS</li>
            <li style={{ color: `${paytc}`, borderColor: `${paytc}` }}>
              PAYMENT
            </li>
          </ul>
        </div>
        <div className="secureContainer">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            width="26"
            height="28"
          />
          <div className="secure">100% SECURE</div>
        </div>
      </div>
    </header>
  );
};
