import { createBrowserRouter } from "react-router-dom";
import IdentityLayouts from "./layouts/identityLayouts";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import MainLayout from "./layouts/mainLayout/main-layout";
import Courses from "./pages/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        element: <Courses/>,
        index: true
      }
    ]
  },
  {
    element: <IdentityLayouts />,
    children: [
      { path: "/", element: <Login />, action: loginAction, errorElement: <Login /> },
      { path: "register", element: <Register />, action: registerAction, errorElement: <Register /> },
    ],
  },
]);

export default router;
