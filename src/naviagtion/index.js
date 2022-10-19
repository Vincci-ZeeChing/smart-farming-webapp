import {Outlet } from "react-router-dom";
import Navbar from "../layout";

const Navigation = () => {
    return (
        <>
            {/*<DefaultLayout/>*/}
            <Navbar/>
            <Outlet />

        </>
    );
};
export default Navigation;
