import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { logOut } from "../../utils/auth";
import { User } from "../../schemas/User";
import { getInitials } from "../../utils/getInitials";

export function UserProfileDropdown({ user }: { user: User }) {
  const navigate = useNavigate();
  const { isOpen, handle, ref } = useModal();

  return (
    <div className="relative" ref={ref}>
      {/* Dropdown Trigger */}
      <button
        onClick={handle}
        className="flex items-center gap-2 rounded-full p-1 transition-colors ease-linear hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200 ">
          <span className="flex h-full w-full items-center justify-center text-sm font-medium text-primary">
            {getInitials(user.name, user.lastName)}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 rounded-md border bg-secondary border-primary shadow-lg"
          role="menu"
        >
          <div className="p-4 border-b border-primary">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
                <span className="flex h-full w-full items-center justify-center text-sm font-medium text-secondary">
                  {getInitials(user.name, user.lastName)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-primary">
                  {`${user.name} ${user.lastName ? user.lastName : ""}`}
                </span>
                <span className="text-xs text-primary">{user.email}</span>
              </div>
            </div>
          </div>

          <div className="p-2 ">
            <button
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-primary hover:bg-gray-100 cursor-pointer transition-colors ease-linear"
              role="menuitem"
            >
              <i
                className="icon-[iconamoon--profile-bold]"
                role="img"
                aria-hidden="true"
              />
              <span>Perfil</span>
            </button>

            <button
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-primary hover:bg-gray-100 cursor-pointer transition-colors ease-linear"
              role="menuitem"
            >
              <i
                className="icon-[lucide--settings]"
                role="img"
                aria-hidden="true"
              />
              <span>Configuracion</span>
            </button>

            <button
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-red-600 hover:bg-gray-100 cursor-pointer transition-colors ease-linear"
              role="menuitem"
              onClick={() => logOut(navigate)}
            >
              <i
                className="icon-[icon-park-outline--logout]"
                role="img"
                aria-hidden="true"
              />
              <span>Cerrar sesion</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
