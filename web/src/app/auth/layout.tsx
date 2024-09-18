import { Outlet } from "react-router";


export const AuthLayout = () => {

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <Outlet />
        </div>
    )
}