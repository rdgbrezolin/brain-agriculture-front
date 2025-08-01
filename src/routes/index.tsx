import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/templates/Layout";
import { DashboardPage } from "../components/pages/DashboardPage";
import { ProducersPage } from "../components/pages/ProducersPage";
import { RegisterPage } from "../components/pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "produtores",
        element: <ProducersPage />,
      },
      {
        path: "cadastrar",
        element: <RegisterPage />,
      },
      {
        path: "editar/:id",
        element: <RegisterPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
