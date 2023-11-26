var getAllOrder = (callback) => {
  fetch("http://localhost:8080/order")
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

var postOrder = (callback, order) => {
  fetch("http://localhost:8080/order", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

var postOrderDetail = (callback, orderDetails, order_id, product_id) => {
  fetch(
    `http://localhost:8080/orderDetail/order_id=${order_id}&product_id=${product_id}`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    }
  )
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

var getAllOrderDetail = (callback, user_id) => {
  fetch("http://localhost:8080/orderDetail/user_id=" + user_id)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]);
    });
};
export { getAllOrder, postOrder, postOrderDetail ,getAllOrderDetail};
