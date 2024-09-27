import { Button, Input } from "@material-tailwind/react"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="flex flex-col w-full max-w-md gap-2">
            <div className="flex flex-col w-full gap-4 p-10 bg-white rounded-lg shadow-lg">
                <h1 className="my-4 text-3xl text-center itens-center">Welcome </h1>
                <Input color="blue" label="Email" size="lg" />
                <Input color="blue" label="Password" size="lg" />
                <Button color="blue" className="my-2">Login</Button>

                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-sm text-gray-400">Or</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <Button
                    variant="outlined"
                    size="lg"
                    className="flex justify-center h-12 gap-2 border-blue-gray-200 itens-center"
                    fullWidth>
                    <FcGoogle size={20} />
                    Sign in with Google
                </Button>
            </div>

            <div className="flex items-center justify-center w-full gap-1 p-5 bg-white rounded-lg shadow-lg">
                <p>Don't have an account?</p>
                <Link to="/auth/register" className="font-semibold text-blue-600 underline ">Register</Link>
            </div>
        </div>
    )
}