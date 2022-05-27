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

const ApplyCouponModal = ({
  address,
  userId,
  token,
  setIsOpen,
  coupon_price,
  setApplyCoupon,
}) => {
  const dispatch = useDispatch();

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
              <button
                className="coupon_code"
                onClick={() => {
                  setApplyCoupon(true);
                  setIsOpen(false);
                }}
              >
                EMART{coupon_price}
              </button>
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
                  setApplyCoupon(true);
                  setIsOpen(false);
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
