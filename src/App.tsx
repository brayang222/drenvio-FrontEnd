import { Toaster } from "sonner";
import { AppRouter } from "./routes/AppRouter";
import { HeroUIProvider } from "@heroui/react";

function App() {
  return (
    <main className="flex flex-col w-full h-full">
      <HeroUIProvider>
        <AppRouter />
      </HeroUIProvider>
      <Toaster richColors />
    </main>
  );
}

export default App;
