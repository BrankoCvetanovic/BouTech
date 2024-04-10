import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as homeLoader } from "./pages/Home";
import RootLayout from "./pages/Root";
import AppliancesPage, { loader as applianceLoader } from "./pages/Appliances";
import ITPage, { loader as itLoader } from "./pages/It";
import TVPage, { loader as tvLoader } from "./pages/TV";
import PhonesPage, { loader as phoneLoader } from "./pages/Phones";

import ErrorPage from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage />, loader: homeLoader },
      {
        path: "/appliances",
        element: <AppliancesPage />,
        loader: applianceLoader,
      },
      {
        path: "/it",
        element: <ITPage />,
        loader: itLoader,
      },
      {
        path: "/tvs",
        element: <TVPage />,
        loader: tvLoader,
      },
      {
        path: "/phones",
        element: <PhonesPage />,
        loader: phoneLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
