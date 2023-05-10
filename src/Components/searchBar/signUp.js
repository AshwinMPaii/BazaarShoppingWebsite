import signUp from "../../Assets/Images/signup.png";
import backgroundImageLogin from "../../Assets/Images/backimagelogin.jpg";
import logo from "../../Assets/Icons/logo.png";
import React, { useState, useEffect } from "react";
import "./component.css";


const SignUp = (props) => {
    // const onClose = () => {
    //     props.setIsModalOpen(false);
    // };

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        if (email && password && confirmPassword) {
            fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password, confirmPassword })
            })
                .then(response => {

                })
                .catch(error => {

                })
        }
    }, [email, password, confirmPassword]);

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
        console.log("Sign up clicked!");
    };

    const handleLogIn = (event) => {
        event.preventDefault();
        console.log("Log in clicked!");
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
                                <div class="header2">
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="modalinput"
                                    />
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
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
                                        value={email}
                                        className="modalinput"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        className="modalinput"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="confirm-password">Confirm Password:</label>
                                    <input
                                        type="password"
                                        id="confirm-password"
                                        name="confirm-password"
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
        </>
    )
};

export default SignUp;