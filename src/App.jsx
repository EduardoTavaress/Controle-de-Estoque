import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import router from "./router";

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}