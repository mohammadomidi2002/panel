import { createBrowserRouter } from "react-router-dom";
import IdentityLayouts from "./layouts/identityLayouts";
import Login from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";

const router = createBrowserRouter([
  {
    element: <IdentityLayouts />,
    children: [
      { path: "/", element: <Login /> },
      { path: "register", element: <Register />, action: registerAction, errorElement: <Register /> },
    ],
  },
]);

export default router;
