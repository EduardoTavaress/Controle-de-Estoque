import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import StockItem from "./pages/StockItem";
import AllItems from "./pages/AllItens";
import NewItem from "./pages/NewItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/stock-item",
        element: <StockItem />,
        children: [
            {
                index: true,
                element: <AllItems />,
            },
            {
                path: "todos-os-items",
                element: <AllItems />,
            },
            {
                path: "novo-item",
                element: <NewItem />,
            },
        ],
    },
]);

export default router;