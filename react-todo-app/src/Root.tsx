import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <Outlet />
            <ReactQueryDevtools initialIsOpen={true} />
        </>
    );
}

export default Root;
