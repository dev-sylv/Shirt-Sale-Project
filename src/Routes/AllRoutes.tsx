import { createBrowserRouter } from "react-router-dom";
import { Homelayouts } from "../Components/layouts";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts />,
    children: [
      {
        index: true,
      },
    ],
  },
]);

export default AllRoutes;
