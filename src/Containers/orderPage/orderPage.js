import React from "react";
import Timeline from "../../Components/buttons/timelinebuttons";
import OrderList from "../../Components/orders/orderList";

function OrderPage() {
    return (
        <div className="carthead" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", maxHeight: "100%", background: '#f2f2f2' }}>
            <div>
                <Timeline />
            </div>
            <div>
                <OrderList />
            </div>
        </div>
    );
}

export default OrderPage;