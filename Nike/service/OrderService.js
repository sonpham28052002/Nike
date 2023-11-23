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
export { getAllOrder }