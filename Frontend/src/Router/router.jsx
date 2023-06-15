import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout";
import NotFound from "../Pages/NotFound/NotFound";


export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Root/>,
        errorElement: <NotFound/>, 
    }
])

