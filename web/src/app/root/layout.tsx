import { Outlet } from "react-router"


export const RootLayout = () => {

    //o usuario esta atenticado ele pode acessar se não faça um redirect para a pagina de login

    return (
        <div className="flex w-full h-screen gap-2 bg-gray-100">
            <Outlet />
        </div>
    )
}