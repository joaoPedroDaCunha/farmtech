import { Outlet } from "react-router"


export const RootLayout = () => {

    //o usuario esta atenticado ele pode acessar se não faça um redirect para a pagina de login

    return (
        <div className="flex gap-2 h-screen w-full bg-gray-100">
            <div className="bg-white w-80">

            </div>
            <Outlet />
        </div>
    )
}