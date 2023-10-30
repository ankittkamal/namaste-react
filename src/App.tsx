import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/watch:id",
    element: <Watch />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
