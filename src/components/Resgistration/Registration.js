import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Registration.css";

export default function Registration() {
  // States for registration
  const [username, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the username change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  // const handleEmail = (e) => {
  // 	setEmail(e.target.value);
  // 	setSubmitted(false);
  // };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleBack = (e) => {
    navigate("/login");
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm(); // Validate form fields

    if (isFormValid) {
      // try {
      // 	const response = await registerUser(); // Register user
      // 	console.log("🚀 ~ response:", response)

      // 	if (response.status == 200) {
      // 		setSubmitted(true);
      // 		setError(false);
      // 		navigate('/login');
      // 	} else {
      // 		// Handle unsuccessful registration
      // 		console.log("Registration failed");
      // 	}
      // } catch (error) {
      // 	console.error('Error:', error);
      // 	navigate('/login');  //trial purpose
      // }
      navigate("/login");
    }
  };

  const validateForm = () => {
    if (username === "" || password === "") {
      setError(true);
      return false;
    }
    return true;
  };

  const registerUser = async () => {
    const response = await axios.post("http://192.168.10.96:8870/signup", {
      username: username,
      password: password,
    });
    return response;
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
        <h3>User {username} successfully registered!!</h3>
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
        <h5>Please enter all the fields</h5>
      </div>
    );
  };

  return (
    <div className="form-card">
      <div className="form">
        <div>
          <h1>Registration</h1>
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
              onChange={handleName}
              className="input"
              value={username}
              type="text"
            />
          </div>

          {/* <div className="form-group">
						<label className="label">Email</label>
						<input
							onChange={handleEmail}
							className="input"
							value={email}
							type="email"
						/>
					</div> */}

          <div className="form-group">
            <label className="label">Password</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />
          </div>
          <button onClick={handleBack} className="back-btn" type="submit">
            Back
          </button>
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
