import React from "react";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

function Head(){
    return (
      <>
        <div className="header1">
          <div className="left_side">
            <button className="button1">HOT</button>
            <h5 className="header-text">Free Express Shipping</h5>
          </div>
          <div className="right_side">
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} color="white" />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} color="white" />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} color="white" />
            </a>
          </div>
        </div>
      </>
    );
}

export default Head;