import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Komponentlar
import Home from "./page/Home";
import CreateRecipe from "./page/CreateRecipe";
import Login from "./page/Login";
import Register from "./page/Register";
import Card from "./page/Card";
import CardDetails from "./page/CardDetails";
import ProtectedRoutes from "./components/ProtectedRoutes"; // Agar bu komponent mavjud bo'lsa

// Kontekst
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { user } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "createrecipe",
          element: <CreateRecipe />,
        },
        {
          path: "card",
          element: <Card />,
        },
        {
          path: "carddetails",
          element: <CardDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
