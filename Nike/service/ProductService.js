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

var getProductBestSellersOfWeek = (callback) => {
  fetch("http://localhost:8080/product/bestSellersOfWeek")
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

var getProductBestSellers = (callback, limit) => {
  fetch("http://localhost:8080/product/bestSellers?limit="+limit)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

var getProductDiscount = (callback) => {
  fetch("http://localhost:8080/product/discount")
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

var searchProduct = (callback, textSearch, limit) => {
  fetch("http://localhost:8080/product/search?textSearch=" + textSearch+"&&limit="+limit)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      callback([]); // hoặc giá trị mặc định khác nếu có lỗi
    });
};

export { getAllProduct, getProductByID, getProductBestSellersOfWeek, getProductBestSellers, getProductDiscount, searchProduct };