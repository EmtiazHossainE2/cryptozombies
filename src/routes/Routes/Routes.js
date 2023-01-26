import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/blog/Blog";
import Courses from "../../pages/courses/Courses";
import Home from "../../pages/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/courses",
        element: <Courses />
      },
    ]
  }
])

export default routes;