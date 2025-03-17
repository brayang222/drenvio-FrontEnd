import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProductsList } from "../pages/ProductsList";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
