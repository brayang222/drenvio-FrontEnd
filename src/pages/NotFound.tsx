import { Link } from "@heroui/react";

export const NotFound = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-8 max-w-md">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-gray-400 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 rounded-md"
          >
            <i
              className="icon-[bx--home] text-white font-2xl"
              role="img"
              aria-hidden="true"
            />
            <span>Return Home</span>
          </Link>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200 rounded-md"
            onClick={() => window.history.back()}
          >
            <i
              className="icon-[material-symbols--arrow-back]"
              role="img"
              aria-hidden="true"
            />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
