import {Outlet } from "react-router-dom";
import {DefaultLayout} from "../layout";

const Navigation = () => {
    return (
        <>
            <DefaultLayout/>
            <Outlet />
        </>
    );
};
export default Navigation;
