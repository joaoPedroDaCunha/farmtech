import { Avatar } from "@material-tailwind/react"
import { Outlet } from "react-router"


export const RootLayout = () => {

    //o usuario esta atenticado ele pode acessar se não faça um redirect para a pagina de login

    return (
        <div className="flex flex-col w-full h-screen overflow-hidden gap-2 bg-gray-100">
            <div className="flex flex-row justify-end items-center bg-white h-16 w-full shadow-sm">
                <Avatar className="flex w-10 h-10 mr-10" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
            </div>
                <div className="overflow-auto">
                <Outlet />
                </div>     
        </div>
    )
}