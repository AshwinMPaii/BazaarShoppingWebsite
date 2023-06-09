import signUp from "../../Assets/Images/signup.png";
import backgroundImageLogin from "../../Assets/Images/backimagelogin.jpg";
import logo from "../../Assets/Icons/logo.png";
import React, { useState } from "react";
import "./signUp.css";
import ForgotPasswordPopup from "./ForgotPasswordPopup";

const SignUp = (props) => {
  // const onClose = () => {
  //     props.setIsModalOpen(false);
  // };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleCloseModal = () => {
    props.onClose();
    setIsLoginModalOpen(true);
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
  };
  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
  };
  const handleForgotPasswordSubmit = (email) => {
    // Handle the form submission with the email
    console.log("Forgot Password form submitted. Email:", email);
    // setIsForgotPassword(false);
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
    console.log("Sign up clicked!");

    const isValidEmail = /\S+@gmail\.com/.test(email); //returns true or false
    setIsEmailValid(isValidEmail);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = regex.test(password);
    setIsPasswordValid(isValidPassword);
    if (isValidEmail && isValidPassword) {
      if (password === confirmPassword) {
        const signUpData = {
          email,
          password,
        };

        fetch("http://localhost:8080/users/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData),
        })
          .then((response) => {
            // Handle the response from the backend
            if (response.ok) {
              // Login successful, handle accordingly
              response.text().then((data) => {
                console.log("SignUp successful. Response:", data);
                alert("SignUp successful");
                setIsLoginModalOpen(true);
              });
            } else {
              // Login failed, handle accordingly
              alert("Sign Up failed");
            }
          })
          .catch((error) => {
            alert("connection error!!!");
          });
      } else {
        alert("password doesn't match");
      }
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const loginData = {
      firstname: email,
      password,
    };

    // Function to store the token in the browser's local storage
    // const storeToken = (token) => {
    //   localStorage.setItem('token', token);
    // };

    const storeUserData = (userData) => {
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log(userData);
    };

    // Function to retrieve the token from the browser's local storage
    const getUserData = () => {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        return JSON.parse(userDataString);
      }
      return null;
    };
    const getToken = () => {
      const userData = getUserData();
      if (userData) {
        return userData.id;
      }
      return null;
    };

    // Function to make authenticated requests
    const makeAuthenticatedRequest = (url, method, data = null) => {
      const headers = {
        "Content-Type": "application/json",
      };

      const requestOptions = {
        method,
        headers,
      };

      if (data) {
        requestOptions.body = JSON.stringify(data);
      }

      return fetch(url, requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Request failed");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Invalid email id or password");
        });
    };

    // Send the login data to the backend
    makeAuthenticatedRequest(
      "http://localhost:8080/users/login",
      "POST",
      loginData
    )
      .then((data) => {
        const { token, id } = data;
        localStorage.clear();
        const userData = { token, id };
        //console.log("Login successful. Token:", token);
        storeUserData(userData);
        const tokens = getToken();

        if (tokens) {
          console.log("Token exists:", tokens);
        } else {
          console.log("Token does not exist");
        }
        props.onClose();
        setIsLoginModalOpen(true);
      })
      .catch(() => {
        console.log("Login failed");
      });
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
                    className="modalinput"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="button-container">
                    <button onClick={handleLogIn} className="button-login">
                      Log In
                    </button>
                  </div>
                  <p>
                    Don't have an account?{" "}
                    <span onClick={handleSignUpClick}>Sign up</span>
                    <br />
                    <span onClick={handleForgotPasswordClick}>
                      Forgot Password
                    </span>
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
                  {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
                  <label htmlFor="email">Email or phone:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    value={email}
                    className="modalinput"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    className="modalinput"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                    {!isPasswordValid && (
                                        <p style={{ color: 'red' }}>Invalid Password</p>
                                    )} */}
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    required
                    value={confirmPassword}
                    className="modalinput"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      {isForgotPassword && (
        <ForgotPasswordPopup
          onClose={() => setIsForgotPassword(false)}
          onSubmit={handleForgotPasswordSubmit}
        />
      )}
    </>
  );
};

export default SignUp;
