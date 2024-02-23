import { useEffect, useState } from "react";
import axios from "axios";
const usersUrl = "https://jsonplaceholder.typicode.com/users";

function ApiCalls() {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  const [postResponse, setPostResponse] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      await axios
        .get(usersUrl)
        .then((response) => setUsers(response.data))
        .catch((err) => console.log("errr:", err));
      setLoader(false);
    }, 5000);
  }, []);

  const sendData = () => {
    setTimeout(async () => {
      await axios
        .post(usersUrl, {
          firstName: "ram",
          email: "abc@test.com",
          password: "21231312",
        })
        .then((response) => setPostResponse(response.data))
        .catch((err) => console.log("errr:", err));
      setLoader(false);
    }, 5000);
  };

  /*   const getUsersList = () => {
    setLoader(true);
    setTimeout(async () => {
      await axios
        .get(usersUrl)
        .then((response) => setUsers(response.data))
        .catch((err) => console.log("errr:", err));
      setLoader(false);
    }, 5000);
  }; */
  return (
    <div>
      {/* <button onClick={getUsersList}>Get users</button> */}
      {loader ? (
        <h2>Api is loading please wait....</h2>
      ) : (
        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default ApiCalls;
