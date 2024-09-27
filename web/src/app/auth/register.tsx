
import { Button, Input, } from "@material-tailwind/react"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


export const Register = () => {


    return (

        <div className="flex flex-col gap-2 max-w-md w-full ">
            <div className="bg-white p-10 gap-4 flex flex-col rounded-lg shadow-lg w-full">
                <h1 className="text-3xl font-semibold my-4">Create Account</h1>
                <Input size="lg" color="blue" label="Name" />
                <Input size="lg" color="blue" label="Email" />
                <Input size="lg" color="blue" label="Password" />
                <Button color="blue" className="my-2">Submit</Button>

                <div className="relative flex  py-2 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-sm text-gray-400">Or</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <Button
                    variant="outlined"
                    size="lg"
                    className="flex h-12 border-blue-gray-200 items-center justify-center gap-2 "
                    fullWidth>
                    <FcGoogle size={20} />
                    Sign in with Google
                </Button>
            </div>
            <div className="bg-white p-5 gap-1 flex rounded-lg shadow-lg w-full justify-center items-center ">
                <p>Do you have an account?</p>
                <Link to="/auth/login" className="text-blue-600 underline font-semibold">Login</Link>
            </div>
        </div>




    )
}