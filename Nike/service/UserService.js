var getUserByID =  (callback, id) => {
   return fetch("http://localhost:8080/user/id=" + id)
    .then((response) => response.json()).then((data)=> callback(data))
};
var insertUser = async (user) => {
  await fetch("http://localhost:8080/user", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).catch((error) => console.log(error));
};
export { getUserByID, insertUser };
