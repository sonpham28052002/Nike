var deleteBag = (callback, bag, user_id) => {
  fetch(
    `http://localhost:8080/bag/user_id=${user_id}&product_id=${bag.product.id}&size=${bag.size}`,
    {
      method: "delete",
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
export { deleteBag };
