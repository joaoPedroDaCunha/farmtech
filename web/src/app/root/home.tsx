import { auth } from "../../service/firebase"


export const Home = () => {

    return (
        <div className="flex flex-col gap-2">
            {auth.currentUser?.displayName}
            {auth.currentUser?.email}
        </div>
    )
}