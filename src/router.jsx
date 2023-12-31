import { createBrowserRouter } from "react-router-dom";
import IdentityLayouts from "./layouts/identityLayouts";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import MainLayout from "./layouts/mainLayout/main-layout";
import Courses, { coursesLoder } from "./pages/courses";
import CourseCategories, { categoriesLoader } from "./pages/course-categories";
import { CategoryProvider } from "./features/categories/category-context";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // We bind global errors at the highest level of the object
    errorElement: <UnhandledException/>,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoder
      },
      {
        path: 'course-categories',
        element: (
          <CategoryProvider>
            <CourseCategories />
          </CategoryProvider>
        ),
        loader: categoriesLoader
      }
    ]
  },
  {
    element: <IdentityLayouts />,
    children: [
      { path: "login", element: <Login />, action: loginAction, errorElement: <Login /> },
      { path: "register", element: <Register />, action: registerAction, errorElement: <Register /> },
    ],
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

export default router;
