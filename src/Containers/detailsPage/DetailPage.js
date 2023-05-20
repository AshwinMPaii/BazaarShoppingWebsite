import React from "react";

import Timeline from "../../Components/buttons/timelinebuttons";
import Details from "../../Components/details/details";
function Detailpage() {
  return (
    <div className="carthead" style={{ display: "flex", flexDirection: "column", height: "100vh", background: '#f2f2f2' }}>
      <div className="bt">
        <Timeline />
      </div>
      <div className="cpage">
        <Details />
      </div>
    </div>
  );
}

export default Detailpage;
