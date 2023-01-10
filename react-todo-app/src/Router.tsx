import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "signUp",
                element: <SignUp />,
            },
        ],
    },
]);

export default router;
