import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "./components/ui/toaster";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </NextUIProvider>
  );
}

export default App;
