import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import AppliancesPage from "./pages/Appiances";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/appliances", element: <AppliancesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
