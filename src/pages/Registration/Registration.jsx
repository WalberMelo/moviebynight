import React, { useState, useEffect } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Header from "../../components/Header/Header";

function Registration() {
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: value,
    address: "",
    isDeliveryAddress: true,
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => {
      return { ...prevFormData, phone: value };
    });
  }, [value]);

  /* Handle different types of inputs  */
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  /* Submit data and validation confirm password */
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData.password);
    console.log(formData.confirmPassword);
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    console.log(formData); //Submit To Api (formData)
  }

  return (
    <>
      <Header />

      <div className="registration-container">
        <div>
          <div className="registration-title">
            <h2>Registration</h2>
            <h2>
              <BiCameraMovie />
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="fullName">
              <input
                className="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <PhoneInput
              placeholder="Enter phone number"
              name="phone"
              onChange={setValue}
              value={value}
            />
            <textarea
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
              name="address"
            />
            <input
              type="checkbox"
              id="isDeliveryAddress"
              checked={formData.isDeliveryAddress}
              onChange={handleChange}
              name="isDeliveryAddress"
            />
            <label htmlFor="isDeliveryAddress">
              The address is your delivery address?
            </label>
            <br />
            <br />
            <input
              className="form--password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            <input
              className="form--password"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
            <br />
            <div className="btn--submit">
              <button className="form--submit">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span>Join us 🍿</span>
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
