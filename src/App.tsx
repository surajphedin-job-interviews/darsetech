import axios from "axios";
import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUser] = useState([]);

  const fetchUsersData = async () => {
    try {
      const res = await axios.get(URL);
      console.log(res);
      setUser(res?.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <div
      style={{
        margin: "100px",
        display: "grid",
        gap: "16px",
        cursor: "pointer",
      }}
    >
      {users?.map((user: any) => (
        <UserInfo
          key={user?.id}
          name={user?.name}
          email={user?.email}
        ></UserInfo>
      ))}
    </div>
  );
}

export default App;
