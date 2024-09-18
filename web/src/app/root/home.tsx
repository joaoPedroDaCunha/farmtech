import { Button, Checkbox, Input, Progress } from "@material-tailwind/react"



export const Home = () => {


    return (
        <div>
            <Input label="Email" color="green" />
            <Progress color="green" value={3} />
            <Checkbox color="green" />
            <Button color="teal">Button</Button>
        </div>
    )
}