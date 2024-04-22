import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

export default function Registration() {
  // States for registration
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the username change
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //   try {
    //     const response = await axios.post("http://192.168.10.96:8870/login", {
    //       username,
    //       password,
    //     });

    //     if ((response.status = 200)) {
    //       setSubmitted(true);
    //       setError(false);
    //       navigate("/home");
    //     } else {
    //       console.log("FAILED TO LOGIN");
    //       setSubmitted(false);
    //       setError(true);
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     setSubmitted(false);
    //     setError(true);
    //   }
    // } else {
    //   setError(true);
    // }
    navigate("/home");
  };

  const validateForm = () => {
    return username.trim() !== "" && password.trim() !== "";
  };

  const handleRegister = (e) => {
    navigate("/registration");
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h5>User successfully logged!!</h5>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h5>Please provide valid credentials.</h5>
      </div>
    );
  };

  return (
    <div className="form-card">
      <div className="form">
        <div>
          <h1>Login</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          {/* Labels and inputs for form data */}
          <div className="form-group">
            <label className="label">Username</label>
            <input
              onChange={handleUsername}
              className="input"
              value={username}
              type="username"
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />
          </div>

          <button onClick={handleSubmit} className="btn-submit" type="submit">
            Submit
          </button>
          <div className="row">
            <h3 style={{ display: "inline-block", marginRight: "10px" }}>
              Haven't registered yet?
            </h3>
            <a href="" onClick={handleRegister} className="btn-register">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
