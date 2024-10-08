import { Navigate, Outlet } from "react-router"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/services/firebase";
import { HeaderBar } from "@/components/headerBar";


export const RootLayout = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!user) {
        return <Navigate to="/auth/login" />
    }

    return (
        <div className="flex flex-col w-full h-screen gap-2 overflow-hidden bg-gray-100">
            <HeaderBar />
            <div className="h-full mb-2 overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}