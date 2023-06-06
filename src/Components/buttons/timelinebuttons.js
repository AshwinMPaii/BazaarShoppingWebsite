import React, { useState } from "react";
import './timeline.css';
import { NavLink, } from "react-router-dom";
// useLocation 

function Timeline() {
    // const location = useLocation();
    const [activeButtons, setActiveButtons] = useState([]); // Add useState hook with an array for active buttons

    const buttons = [
        { id: 1, label: "1. Cart", path: "/time1" },
        { id: 2, label: "2. Details", path: "/time2" },
        { id: 3, label: "3. Payment", path: "/time3" },
        { id: 4, label: "4. Orders", path: "/time4" },
    ];

    const handleButtonClick = (buttonNumber) => {
        if (!activeButtons.includes(buttonNumber)) {
            setActiveButtons([...activeButtons, buttonNumber]);
        }
    };

    return (
        <div className="timeline-buttons-container">
            <div className="timeline-buttons">
                {buttons.map((button) => (
                    <NavLink
                        key={button.id}
                        to={button.path}
                        activeClassName="active"
                        className={`timeline-button ${activeButtons.includes(button.id) ? "active" : ""
                            }`}
                        onClick={() => handleButtonClick(button.id)}
                    >
                        {button.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Timeline;