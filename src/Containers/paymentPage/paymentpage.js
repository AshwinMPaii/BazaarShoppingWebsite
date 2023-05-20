import React from "react";
import Timeline from "../../Components/buttons/timelinebuttons";
import Payment from "../../Components/payment/payment";
function Paymentpage() {
  return (
    <div className="carthead" style={{ display: "flex", flexDirection: "column", height: "100vh", background: '#f2f2f2' }}>
      <div className="bt">
        <Timeline />
      </div>
      <div className="cpage">
        <Payment />
      </div>
    </div>
  );
}

export default Paymentpage;
