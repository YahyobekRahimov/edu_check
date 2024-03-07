import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Groups from "./pages/Groups/Groups";
import Students from "./pages/Students/Students";
import Payments from "./pages/Payments/Payments";
import Settings from "./pages/Settings/Settings";

export default function Providers({ children }: any) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Groups />,
    },
    {
      path: "/students",
      element: <Students />,
    },
    {
      path: "/payments",
      element: <Payments />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);
  // @ts-ignore
  return <RouterProvider router={router}>{children}</RouterProvider>;
}
