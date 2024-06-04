import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import PrivateRoute from "./routes/private/PrivateRoute";
import AddProducts from "./components/dashboard/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
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

  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit/:id",
        element: <PrivateRoute>{/* <EditProfile /> */}</PrivateRoute>,
        loader: ({ params }) => fetch(`https://stride-final-project-server.vercel.app/user/get/${params.id}`),
      },
      {
        path: "all-products",
        element: <PrivateRoute>{/* <AllProducts /> */}</PrivateRoute>,
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: <PrivateRoute>{/* <EditProducts /> */}</PrivateRoute>,
        loader: ({ params }) => fetch(`https://stride-final-project-server.vercel.app/shoes/${params.id}`),
      },
    ],
  },
]);
