import { Button } from "@material-tailwind/react"
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md"



export const ReservoirDetailsPage = () => {



    return (
        <div className="flex flex-col items-center w-full h-screen gap-6 mt-4">
            <div className="flex flex-row items-center justify-between w-full h-24 p-4 bg-white rounded-lg shadow-sm max-w-7xl">
                <div className="flex ">
                    <h1 className="flex p-4 text-xl font-semibold">Reservoir: Sítio</h1>
                </div>
                <div className="flex gap-4">
                    <Button color="blue" className="flex items-center gap-2 normal-case"><MdOutlineEdit size={16} />
                        Edit
                    </Button>
                    <Button color="red" className="flex items-center gap-2 text-white normal-case hover:bg-red-400"><MdDeleteOutline size={16} />
                        Delete
                    </Button>
                </div>
            </div>
            <div className="flex flex-col w-full bg-white rounded-lg shadow-sm h-3/6 max-w-7xl">
                <div>
                    Grafico Nível
                </div>
            </div>
            <div className="flex flex-col w-full bg-white rounded-lg shadow-sm h-1/6 max-w-7xl ">
                <div>
                    Grafico tabela
                </div>
            </div>
        </div>
    )
}