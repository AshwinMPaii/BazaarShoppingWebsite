import React from "react";

import Timeline from "../../Components/buttons/timelinebuttons";
import Cart from "../../Components/cart/cart";
import './cartpage.css';
function Cartpage() {
  return (
    <div className="carthead" style={{ display: "flex", flexDirection: "column", height: "100%", background: '#f2f2f2' }}>
      <div className="bt" >
        <Timeline />
      </div>
      <div className="cpage" >
        <Cart />
      </div>
    </div>
  );
}

export default Cartpage;
