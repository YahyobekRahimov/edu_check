import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Groups from "./pages/Groups/Groups";
import Students from "./pages/Students/Students";
import Payments from "./pages/Payments/Payments";
import Settings from "./pages/Settings/Settings";
import LayoutComponent from "./layout/LayoutComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LayoutComponent>
          <Groups />
        </LayoutComponent>
      ),
    },
    {
      path: "/students",
      element: (
        <LayoutComponent>
          <Students />
        </LayoutComponent>
      ),
    },
    {
      path: "/payments",
      element: (
        <LayoutComponent>
          <Payments />
        </LayoutComponent>
      ),
    },
    {
      path: "/settings",
      element: (
        <LayoutComponent>
          <Settings />
        </LayoutComponent>
      ),
    },
  ]);
  return (
    // @ts-ignore
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
