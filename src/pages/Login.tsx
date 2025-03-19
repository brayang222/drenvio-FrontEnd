import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/token";
import { handleChange } from "../utils/handleChange";
import { Link } from "@heroui/react";
import { login } from "../services/user/login";

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setIsLoading(true);
      const logguedUser = await login(user);
      setToken(JSON.stringify(logguedUser));
      console.log(logguedUser);

      navigate("/");
      window.location.reload();
      return logguedUser;
    } catch (err) {
      console.log(user);
      setError(String(err));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary p-4 text-gray-100">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Ingresar a tu cuenta
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Ingresa los datos de tu cuenta
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div
              className="bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              defaultValue={user.email}
              onChange={(e) => handleChange(e, setUser)}
              required
              className="mt-1 block w-full px-3 py-2 bg-secondary border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-primary focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200"
              >
                Clave
              </label>
              <a
                href="#"
                className="text-sm font-medium text-blue-400 hover:underline"
              >
                Olvidaste la clave?
              </a>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              defaultValue={user.password}
              onChange={(e) => handleChange(e, setUser)}
              required
              className="mt-1 block w-full px-3 py-2 bg-secondary border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-primary focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            No tienes cuenta?{" "}
            <a
              href="/register"
              className="font-medium text-blue-400 hover:underline"
            >
              Registrar
            </a>
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-4 py-2 border border-white text-white hover:bg-white *:hover:text-black transition-colors duration-200 rounded-md"
        >
          <i
            className="icon-[bx--home] text-white font-2xl"
            role="img"
            aria-hidden="true"
          />
          <span>Ir al inicio</span>
        </Link>
      </div>
    </div>
  );
}
