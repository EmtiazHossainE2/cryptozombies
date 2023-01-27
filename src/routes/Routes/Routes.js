import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/blog/Blog";
import Courses from "../../pages/courses/Courses";
import Home from "../../pages/home/Home";
import DetailsNews from "../../components/Home/Blogs/DetailsNews";
import DisplayError from "../../components/Common/DisplayError/DisplayError";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
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
        path: "/blog/:id",
        element: <DetailsNews />,
        loader: ({params})=> fetch(`blogData/${params.id}`)
      },
      {
        path: "/courses",
        element: <Courses />
      },
    ]
  }
])

export default routes;