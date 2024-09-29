import { Button, Input } from "@material-tailwind/react"
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "@/services/firebase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

type FormValues = z.infer<typeof formSchema>;

export const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

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



    const handleLoginWithEmailAndPassword = async () => {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, getValues().email, getValues().password)
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

    return (
        <div className="flex flex-col w-full max-w-md gap-2">
            <div className="flex flex-col w-full gap-4 p-10 bg-white rounded-lg shadow-lg">
                <h1 className="my-4 text-3xl text-center itens-center">Welcome </h1>
                <form className="flex flex-col gap-4 " onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}>
                    <Input {...register("email")} error={!!errors.email} type="email" color="blue" label={!!errors.email ? errors.email.message : "Email"} size="lg" />
                    <Input  {...register("password")} color="blue" type="password" error={!!errors.password} label={!!errors.password ? errors.password.message : "Password"} size="lg" />
                    <Button type="submit" loading={isLoading} color="blue" className="my-2">Login</Button>
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