import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/blog/Blog";
import Courses from "../../pages/courses/Courses";
import Home from "../../pages/home/Home";
import { blogData } from '../../components/Home/Blogs/blogData'
import DetailsNews from "../../components/Home/Blogs/DetailsNews";

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