
import { Button, Input, } from "@material-tailwind/react"
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { auth } from "@/services/firebase";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";


const formSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

type FormValues = z.infer<typeof formSchema>;

export const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(formSchema) });
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        setIsLoading(true);
        await signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                toast.error("Invalid credentials");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }



    const handleRegisterWithEmailAndPassword = async () => {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, getValues().email, getValues().password)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                toast.error("Email already exists");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="flex flex-col w-full max-w-md gap-2">
            <div className="flex flex-col w-full gap-4 p-10 bg-white rounded-lg shadow-lg">
                <h1 className="my-4 text-3xl text-center itens-center">Create Account</h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegisterWithEmailAndPassword)}>
                    <Input {...register("name")} error={!!errors.name} size="lg" color="blue" label={!!errors.name ? errors.name.message : "Name"} />
                    <Input {...register("email")} error={!!errors.email} size="lg" color="blue" type="email" label={!!errors.email ? errors.email.message : "Email"} />
                    <Input {...register("password")} error={!!errors.password} size="lg" color="blue" type="password" label={!!errors.password ? errors.password.message : "Password"} />
                    <Button loading={isLoading} type="submit" color="blue" className="my-2">Submit</Button>
                </form>

                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-sm text-gray-400">Or</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <Button
                    onClick={handleLoginWithGoogle}
                    loading={isLoading}
                    variant="outlined"
                    size="lg"
                    className="flex items-center justify-center h-12 gap-2 border-blue-gray-200 "
                    fullWidth>
                    <FcGoogle size={20} />
                    Sign in with Google
                </Button>
            </div>
            <div className="flex items-center justify-center w-full gap-1 p-5 bg-white rounded-lg shadow-lg ">
                <p>Do you have an account?</p>
                <Link to="/auth/login" className="font-semibold text-blue-600 underline">Login</Link>
            </div>
        </div>
    )
}