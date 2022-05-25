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

const Modal = ({ address, userId, token, setIsOpen, deleteData }) => {
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
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div>
            <div className={"modalHeader"}>
              <h5 className={"heading"}>EDIT ADDRESS</h5>
              <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ fontSize: "25px" }} />
              </button>
            </div>
          </div>
          <div className="address_input ">
            <div className="contact_details input_title">
              <p>CONTACT DETAILS</p>
              <div>
                <div className="input_wraper">
                  <input
                    value={userName}
                    className="input_input "
                    id="name"
                    type="text"
                    placeholder="Name*"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="input_wraper">
                  <input
                    value={mobile}
                    className="input_input "
                    id="mobile"
                    type="number"
                    placeholder="Mobile No*"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="address_details input_title">
              <p>ADDRESS</p>
              <div>
                <div className="input_wraper">
                  <input
                    value={pincode}
                    className="input_input "
                    id="pincode"
                    type="number"
                    placeholder="Pin code*"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
                <div className="input_wraper">
                  <input
                    value={addressField}
                    className="input_input "
                    id="address"
                    type="text"
                    placeholder="Address (House No, Building, Street, Area)*"
                    onChange={(e) => setAddressField(e.target.value)}
                  />
                </div>
                <div className="input_wraper">
                  <input
                    value={town}
                    className="input_input "
                    id="address"
                    type="text"
                    placeholder="Locality/Town*"
                    onChange={(e) => setTown(e.target.value)}
                  />
                </div>
                <div className="input_wraper">
                  <input
                    value={state}
                    className="input_input "
                    id="state"
                    type="text"
                    placeholder=" State*"
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <input type="checkbox" />
              <span style={{ fontSize: "14px" }}>
                {" "}
                Make this my default address
              </span>
            </div>
            <div className="place_order_btn save_address modal_header">
              <button
                onClick={() => {
                  addressUpdate();
                }}
              >
                SAVE ADDRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
