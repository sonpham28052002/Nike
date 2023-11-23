var getAllProduct = (callback) => {
  fetch("http://localhost:8080/product")
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

var getProductBestSellers = (callback) => {
  fetch("http://localhost:8080/product/bestSellers")
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

var getProductByID = (callback, id) => {
  fetch("http://localhost:8080/product/id=" + id)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

export { getAllProduct, getProductByID, getProductBestSellers };