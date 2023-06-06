import React, { useState } from "react";
import './ForgotPasswordPopup.css';

const ForgotPasswordPopup = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOTP] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(email);
    setShowOTPForm(true);
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    // Handle OTP submission
    console.log("OTP submitted:", otp);

    // You can perform any necessary action here

    setShowResetForm(true);
  };

  const handleResetSubmit = (event) => {
    event.preventDefault();
    // Handle password reset submission
    console.log("New password:", newPassword);
    console.log("Confirm password:", confirmPassword);

    // You can perform any necessary action here

    // Close the modal after resetting the password
    onClose();
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
              <label className="forgot-label" htmlFor="email">Email:</label>
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
                <button type="submit" className="forgot-button-submit">
                  Send OTP
                </button>
              </div>
            </form>
          </div>
        )}

        {showOTPForm && !showResetForm && (
          <div className="forgot-otp-form">
            <h3 className="forgot-h3">Enter OTP</h3>
            <form onSubmit={handleOTPSubmit}>
              <label className="forgot-label" htmlFor="otp">OTP:</label>
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
                <button type="submit" className="forgot-button-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {showResetForm && (
          <div className="forgot-reset-form">
            <h3 className="forgot-h3">Reset Password</h3>
            <form onSubmit={handleResetSubmit}>
              <label className="forgot-label" htmlFor="new-password">New Password:</label>
              <input
                className="forgot-input"
                type="password"
                id="new-password"
                name="new-password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label className="forgot-label" htmlFor="confirm-password">Confirm Password:</label>
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
                <button type="submit" className="forgot-button-submit">
                  Reset Password
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
