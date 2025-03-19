import { useState } from "react";
import { User } from "../schemas/User";
import { toast } from "sonner";
import { getAllUsers } from "../services/user/getAllUsers";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    try {
      const usersData = await getAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : String(error));
    }
  }

  return { users, fetchUsers };
};
