import { Button, } from "@material-tailwind/react"
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


export const Reservoir = () => {
    return (
        <div className="flex flex-col items-center gap-6 h-screen w-full mt-4">
            <div className=" flex flex-row justify-between items-center bg-white p-4 h-24 max-w-7xl w-full shadow-sm rounded-lg">                
                    <div className="flex ">
                    <h1 className="p-4 font-semibold flex text-xl">Reservoir: Sítio</h1>
                    </div>                    
                    <div className="flex gap-4">
                    <Button color="blue" className="flex gap-2 items-center normal-case"><MdOutlineEdit size={16} />
                        Edit
                    </Button>
                    <Button color="red" className="flex gap-2 items-center normal-case text-white hover:bg-red-400"><MdDeleteOutline size={16} /> 
                        Delete
                    </Button>
                    </div>
            </div>
            <div className="flex bg-white flex-col h-3/6 max-w-7xl w-full shadow-sm rounded-lg">
                <div>
                    Grafico Nível
                </div>
            </div>
            <div className="flex bg-white flex-col h-1/6 max-w-7xl w-full shadow-sm rounded-lg ">
                <div>
                    Grafico tabela
                </div>
            </div>
        </div>
    )
}