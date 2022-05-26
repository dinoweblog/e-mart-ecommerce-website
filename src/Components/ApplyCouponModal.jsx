// @src/components/Modal.jsx

import React, { useState } from "react";
import "./Styles/Modal.css";
import { RiCloseLine } from "react-icons/ri";
import {
  getAddressData,
  getAddressError,
  getAddressLoading,
  getAddressSuccess,
} from "../Redux/Address/action";
import { useDispatch } from "react-redux";

const ApplyCouponModal = ({ address, userId, token, setIsOpen }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(address[0].userName);
  const [mobile, setMobile] = useState(address[0].mobile);
  const [pincode, setPincode] = useState(address[0].pincode);
  const [addressField, setAddressField] = useState(address[0].addressField);
  const [town, setTown] = useState(address[0].town);
  const [state, setState] = useState(address[0].state);

  const addressUpdate = () => {
    const addressData = {
      userName,
      mobile,
      pincode,
      addressField,
      town,
      state,
      userId,
    };
    dispatch(getAddressLoading());

    fetch(`https://emart-server.herokuapp.com/user/address/update/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(addressData),
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsOpen(false);
        dispatch(getAddressData(userId, token));
        dispatch(getAddressSuccess());
      })
      .catch((error) => dispatch(getAddressError()));
  };

  let coupon_price = 200;
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered apply_coupons_centered"}>
        <div className={"modal"}>
          <div>
            <div className={"modalHeader"}>
              <h5 className={"heading"}>Apply Coupons</h5>
              <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ fontSize: "25px" }} />
              </button>
            </div>
          </div>
          <div className="address_input  apply_coupons_container">
            <div>
              {/* <input type="checkbox" /> */}
              <button className="coupon_code">EMART{coupon_price}</button>
              <div class="coupon_info_container">
                <div>
                  <span>Save </span>
                  <span>
                    <i className="bx bx-rupee"></i>200
                  </span>
                </div>
                <div>
                  <div>Rs. 200 off on minimum purchase of Rs. 1349 .</div>
                  <div>Expires on: 31st December 2022 11:59 PM</div>
                </div>
              </div>
            </div>
            <div className="place_order_btn apply_coupon modal_header">
              <div>
                <p>Maximum Saving</p>
                <p>Rs. {coupon_price}</p>
              </div>
              <button
                onClick={() => {
                  addressUpdate();
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyCouponModal;
