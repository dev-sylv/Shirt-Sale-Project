import { createBrowserRouter } from "react-router-dom";
import { Homelayouts } from "../Components/layouts";
import { HomeScreen } from "../Pages";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);

export default AllRoutes;
