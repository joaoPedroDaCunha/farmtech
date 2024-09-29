import { UserMenu } from "./userMenu";



export const HeaderBar = () => {


    return (
        <div className="flex justify-between p-2 bg-white shadow-sm">
            <div></div>
            <div>
                <UserMenu />
            </div>
        </div>
    )
}