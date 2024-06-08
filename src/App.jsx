import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Offers } from "./pages/Offers";
import { Offer } from "./pages/Offer";
import { Reserve } from "./pages/Reserve";
import { OffersEdit } from "./pages/OffersEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/offers",
    element: (
      <Layout>
        <Offers />
      </Layout>
    ),
  },
  {
    path: "/offers/edit",
    element: (
      <Layout>
        <OffersEdit />
      </Layout>
    )
  },
  {
    path: "/offer/:id",
    element: (
      <Layout>
        <Offer />
      </Layout>
    ),
  },
  {
    path: '/offer/:id/reserve',
    element: (
      <Layout>
        <Reserve />
      </Layout>
    )
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
