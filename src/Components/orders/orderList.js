import { useEffect, useState } from "react";
import "./orderList.css";

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/orders/1")
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="order-list">
            {orders.map((order) => (
                <div className="order-card" key={order.orderId}>
                    <h3>Order ID:{order.orderId}</h3>
                    <p>Total Price:<span> ${order.totalPrice}</span></p>
                    <p>Order Date:<span> {order.orderDate}</span></p>
                    <p>Status:<span>{order.status}</span> </p>
                    <div>
                        {order.orderItems.map((orderItem) => (
                            <div className="order-item" key={orderItem.productName}>
                                <p>Product:{orderItem.productName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrderList;
