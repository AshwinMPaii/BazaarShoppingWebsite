import signUp from "../../Assets/Images/signup.png";
import backgroundImageLogin from "../../Assets/Images/backimagelogin.jpg";
import logo from "../../Assets/Icons/logo.png";
import React, { useState } from "react";
import "./signUp.css";

const SignUp = (props) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleCloseModal = () => {
    props.onClose();
    setIsLoginModalOpen(true);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsLoginModalOpen(false);
  };

  const handleLogInClick = () => {
    setIsSignUp(false);
    setIsLoginModalOpen(true);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Existing sign up logic
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    // Existing log in logic
  };

  const forgotPassword = () => {
    const email = prompt("Enter your email address");
    if (email) {
      // Send an email to the user with a link to reset their password
      fetch(`http://localhost:8080/users/forgot-password?email=${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          // Handle the response from the backend
          if (response.ok) {
            // Email sent successfully, handle accordingly
            alert(
              "An email has been sent to you with a link to reset your password"
            );
          } else {
            // Email failed to send, handle accordingly
            alert("An error occurred while sending the email");
          }
        })
        .catch((error) => {
          alert("connection error!!!");
        });
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <button onClick={handleCloseModal} className="close-button">
            X
          </button>
          {isLoginModalOpen ? (
            <>
              <div
                className="login-form"
                style={{
                  backgroundImage: `url(${backgroundImageLogin})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="header2">
                  <img src={logo} alt="Bazzar Logo" className="modallogo" />
                  <br></br>
                  <p>Welcome to Bazzar</p>
                </div>

                <form>
                  <h3>Log In</h3>
                  <label htmlFor="email">Email or phone:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="modalinput"
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="modalinput"
                  />
                  <div className="button-container">
                    <button onClick={handleLogIn} className="button-login">
                      Log In
                    </button>
                  </div>
                  <p>
                    Don't have an account?{" "}
                    <span onClick={handleSignUpClick}>Sign up</span>
                  </p>
                  <p>
                    Forgot password?{" "}
                    <span onClick={forgotPassword}>Click here</span>
                  </p>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="signup-form">
                <div className="image-container">
                  <img src={signUp} alt="imagehere" />
                </div>
                <form onSubmit={handleSignUp}>
                  <h3>Sign Up</h3>
                  <label htmlFor="email">Email or phone:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="modalinput"
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="modalinput"
                  />
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="modalinput"
                  />
                  <div className="button-container">
                    <button onClick={handleSignUp} className="button-login">
                      Sign Up
                    </button>
                  </div>
                  <p>
                    Already have an account?{" "}
                    <span onClick={handleLogInClick}>Log in</span>
                  </p>
                  <p>
                    Forgot password?{" "}
                    <span onClick={forgotPassword}>Click here</span>
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
