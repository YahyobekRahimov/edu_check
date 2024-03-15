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
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import StudentProfile from "./pages/StudentProfile/StudentProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/groups",
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
    {
      path: "/students/:id",
      element: <StudentProfile />,
    },
  ]);
  return (
    // @ts-ignore
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
