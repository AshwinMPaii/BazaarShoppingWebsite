import { useEffect, useState } from "react";
import "./orderList.css";

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
    return userData.token;
  }
  return null;
};
const getId = () => {
  const userData = getUserData();
  if (userData) {
    return userData.id;
  }
  return null;
};
const token = getToken();
console.log("cart" + token);
const id = getId();

function OrderList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const userId = getId(); // Replace with the actual user ID
      const token = getToken(); // Get the latest token

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      fetch(`http://localhost:8080/orders/${userId}`, { headers })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Request failed");
          }
        })
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
