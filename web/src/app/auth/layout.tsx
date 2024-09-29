import { auth } from "@/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router";


export const AuthLayout = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (user) {
        return <Navigate to="/" />
    }


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Outlet />
        </div>
    )
}