import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "../Cartpage/cart"

import "./cart.css"
// import Timeline2 from "./Timeline2";
// import Timeline3 from "./Timeline3";
// import Timeline4 from "./Timeline4";



function TimelineButtons() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <Router>
      <div className="timeline-buttons-container">
        <div className="timeline-buttons">
          <Link to="/timeline1">
            <button
              className={`timeline-button ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              1. Cart
            </button>
          </Link>
          <Link to="/timeline2">
            <button
              className={`timeline-button ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              2. Details
            </button>
          </Link>
          <Link to="/timeline3">
            <button
              className={`timeline-button ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              3. Payment
            </button>
          </Link>
          <Link to="/timeline4">
            <button
              className={`timeline-button ${
                activeButton === 4 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              4. Review
            </button>
          </Link>
        </div>
        <div className="timeline-content">
          <Routes>
            <Route path="/timeline1" element={<Cart/>} />
            {/* <Route path="/timeline2" element={<Timeline2 />} />
            <Route path="/timeline3" element={<Timeline3 />} />
            <Route path="/timeline4" element={<Timeline4 />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default TimelineButtons;
