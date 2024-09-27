
import { Button, Input, } from "@material-tailwind/react"
import { FcGoogle } from "react-icons/fc";


export const Register = () => {


    return (

        <div className="bg-white p-10 gap-4 flex flex-col rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-3xl my-4 text-center">Create Account</h1>
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




    )
}