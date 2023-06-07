import React, { useState } from "react";
import axios from "axios";
import "./ForgotPasswordPopup.css";

const ForgotPasswordPopup = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOTP] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
   const handleSubmit = async (event) => {
     event.preventDefault();
     setIsLoading(true);
     try {
       const response = await axios.post(
         `http://localhost:8080/users/send-otp?email=${email}`
       );
       if (response.status === 200) {
         setShowOTPForm(true);
         setIsLoading(false);
       } else {
         alert("Failed to send OTP. Please try again.");
         setIsLoading(false);
       }
     } catch (error) {
       alert("An error occurred. Please try again later.");
       setIsLoading(false);
     }
   };

const verifyOTP = async () => {
  setIsLoading(true);

  try {
    const response = await axios.post(
      `http://localhost:8080/users/verify?otp=${otp}&email=${email}`
    );

    if (response.status === 200) {
      const result = response.data;
      

      if (result === true) {
        setShowResetForm(true);
        // alert("done");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } else {
      alert("An error occurred. Please try again later.");
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
  }

  setIsLoading(false);
};

const resetPassword = async () => {
  setIsLoading(true);
if (newPassword === confirmPassword) {
  try {
    const response = await axios.post(
      `http://localhost:8080/users/reset-password?email=${email}&newPassword=${newPassword}`
    );

     if (response.status === 200) {
         onClose();
       } else {
         alert("Failed to Reset password. Please try again.");
         setIsLoading(false);
       }
     } catch (error) {
       alert("An error occurred. Please try again later.");
       setIsLoading(false);
     }
    }
else{
  alert("new password and confirm password input field must match");
  setIsLoading(false);
}
};

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   sendOTP();
  // };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    verifyOTP();
  };

  const handleResetSubmit = (event) => {
    event.preventDefault();
    resetPassword();
    // Handle password reset submission
    // console.log("New password:", newPassword);
    // console.log("Confirm password:", confirmPassword);

    // You can perform any necessary action here

    // Close the modal after resetting the password
    // onClose();
  };

  return (
    <div className="forgot-modal">
      <div className="forgot-modal-content">
        <button onClick={onClose} className="forgot-close-button">
          X
        </button>

        {!showOTPForm && !showResetForm && (
          <div className="forgot-password-form">
            <h3>Forgot Password</h3>
            <form onSubmit={handleSubmit}>
              <label className="forgot-label" htmlFor="email">
                Email:
              </label>
              <input
                className="forgot-input"
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="forgot-button-container">
                <button
                  type="submit"
                  className="forgot-button-submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Send OTP"}
                </button>
              </div>
            </form>
          </div>
        )}

        {showOTPForm && !showResetForm && (
          <div className="forgot-otp-form">
            <h3 className="forgot-h3">Enter OTP</h3>
            <form onSubmit={handleOTPSubmit}>
              <label className="forgot-label" htmlFor="otp">
                OTP:
              </label>
              <input
                className="forgot-input"
                type="text"
                id="otp"
                name="otp"
                required
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
              <div className="forgot-button-container">
                <button
                  type="submit"
                  className="forgot-button-submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        )}

        {showResetForm && (
          <div className="forgot-reset-form">
            <h3 className="forgot-h3">Reset Password</h3>
            <form onSubmit={handleResetSubmit}>
              <label className="forgot-label" htmlFor="new-password">
                New Password:
              </label>
              <input
                className="forgot-input"
                type="password"
                id="new-password"
                name="new-password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label className="forgot-label" htmlFor="confirm-password">
                Confirm Password:
              </label>
              <input
                className="forgot-input"
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="forgot-button-container">
                <button
                  type="submit"
                  className="forgot-button-submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Changing password..." : "Reset password"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
