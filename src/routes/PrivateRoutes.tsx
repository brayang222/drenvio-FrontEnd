import { Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { UserList } from "../components/user/UserList";

export const PrivateRoutes = () => {
  const auth = isAuthenticated();

  if (auth.user.role != "admin") {
    return <Navigate to="/" replace />;
  }
  return (
    <Routes>
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};
