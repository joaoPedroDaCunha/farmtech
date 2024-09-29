import { auth } from "@/services/firebase";
import { Avatar, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react"
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth'



export const UserMenu = () => {
    const [user] = useAuthState(auth);


    return (
        <Menu>
            <MenuHandler>
                <Avatar size="sm" src={user?.photoURL || ""} alt={user?.displayName || ""} />
            </MenuHandler>
            <MenuList>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem onClick={() => signOut(auth)}>SignOut</MenuItem>
            </MenuList>
        </Menu>
    )
}