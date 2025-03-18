import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/user/getAllUsers";
import { User } from "../../schemas/User";

export const UserList = () => {
  const [users, setUsers] = useState<User>();

  async function fetchUsers() {
    try {
      const usersData = await getAllUsers();
      setUsers(users);
      console.log(users);
      return usersData;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>UserList</div>;
};
