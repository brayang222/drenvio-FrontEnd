import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProductsList } from "../components/products/ProductsList";
import { Layout } from "../components/Layout";
import { SpecialPriceList } from "../components/specialPrice/SpecialPriceList";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<Layout />}>
        <Route path="/" element={<ProductsList />} />
        <Route path="/special-prices" element={<SpecialPriceList />} />
      </Route>
    </Routes>
  );
};
