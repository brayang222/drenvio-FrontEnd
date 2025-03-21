import { StoreIcon } from "./StoreIcon";
import { Link } from "@heroui/react";
import { isAuthenticated } from "../utils/auth";
import { UserProfileDropdown } from "./user/UserProfileDropdown";

export const NavbarComponent = () => {
  const auth = isAuthenticated();

  return (
    <div className="bg-primary text-secondary py-3 px-5 flex items-center justify-between w-full border-b-2 z-10">
      <a href="/" className="flex items-center">
        <StoreIcon
          classes={
            "bg-primary-custom p-2 rounded-lg mr-2 flex items-center text-white"
          }
        />
      </a>
      {auth?.isAuth ? (
        <>
          <li className="hidden sm:flex gap-7 *:font-medium *:text-secondary">
            <Link color="foreground" href="/">
              Productos
            </Link>
            <Link color="foreground" href="/special-prices">
              Precios especiales
            </Link>
            {auth.user.role === "admin" ? (
              <Link color="foreground" aria-current="page" href="/admin/users">
                Users
              </Link>
            ) : (
              <></>
            )}
          </li>
          <UserProfileDropdown user={auth.user} />
        </>
      ) : (
        <div className="flex gap-4 *:font-medium *:text-secondary">
          <Link href="/login" color="foreground">
            Ingresar
          </Link>
          <Link color="foreground" href="/register">
            Registrarse
          </Link>
        </div>
      )}
    </div>
  );
};
