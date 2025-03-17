import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { createUser } from "../../services/createUser";
// import { ROLES } from "../../enum/roles.enu";
// import { login } from "../../services/login";
import { setToken } from "../store/token";
import { handleChange } from "../utils/handleChange";

export function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    // role: ROLES.USER,
    avatar: "",
  });
  const navigate = useNavigate();
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (user.password !== user.confirmPassword) {
      setError("Las claves no coinciden");
      return;
    }

    if (!agreeTerms) {
      setError("Debes estar de acuerdo con los términos y condiciones");
      return;
    }

    try {
      setIsLoading(true);

      // const createdUser = await createUser({
      //   name: user.name,
      //   email: user.email,
      //   password: user.password,
      //   phone: user.phone,
      //   role: user.role,
      //   avatar: user.avatar,
      // });
      console.log("Registration successful");

      // const logguedUser = await login({
      //   email: user.email,
      //   password: user.password,
      // });
      // setToken(JSON.stringify(logguedUser));
      // console.log(logguedUser);

      navigate("/");

      // return createdUser;
    } catch (err) {
      setError("Failed to register. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-gray-100">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Crear una cuenta
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Rellena todos los campos para registrarte
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
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={(e) => handleChange(e, setUser)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="register-email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              id="register-email"
              type="email"
              name="email"
              placeholder="name@example.com"
              onChange={(e) => handleChange(e, setUser)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="register-password"
              className="block text-sm font-medium text-gray-200"
            >
              Clave
            </label>
            <input
              id="register-password"
              type="password"
              name="password"
              onChange={(e) => handleChange(e, setUser)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-200"
            >
              Confirmar clave
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              onChange={(e) => handleChange(e, setUser)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-gray-800"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              Estoy de acuerdo con los{" "}
              <a href="#" className="text-blue-400 hover:underline">
                términos y condiciones
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isLoading ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Ya tienes una cuenta?{" "}
            <a
              href="/login"
              className="font-medium text-blue-400 hover:underline"
            >
              Ingresa
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
