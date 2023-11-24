var putBag = (bag, user_id, product_id) => {
  return fetch(
    `http://localhost:8080/bag/user_id=${user_id}&product_id=${product_id}`,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bag),
    }
  ).then((res)=> res.json());
};
export { putBag };
