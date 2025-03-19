import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
};
