import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
            , {
                path: '/about',
                element: <About></About>
            }
            , {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);
export default MyRouter;


