import { Button, Input, IconButton, Menu, MenuHandler, MenuItem, MenuList,} from "@material-tailwind/react"
import { IoMdSearch } from "react-icons/io";
import { TbDatabaseLeak } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { PiEye } from "react-icons/pi";


const reservatorios = [
    { nome: "Sítio",     capacidade: 1000, volume: 500 },
    { nome: "Rancho",    capacidade: 1000, volume: 500 },
    { nome: "Casa",      capacidade: 1000, volume: 500 },
    { nome: "Tanque 01", capacidade: 1000, volume: 500 },
    { nome: "Tanque 02", capacidade: 1000, volume: 500 },
    { nome: "Tanque 03", capacidade: 1000, volume: 500 },
    { nome: "Tanque 04", capacidade: 1000, volume: 500 },
    { nome: "Tanque 05", capacidade: 1000, volume: 500 },
    { nome: "Tanque 06", capacidade: 1000, volume: 500 },
    { nome: "Tanque 07", capacidade: 1000, volume: 500 },
    { nome: "Tanque 08", capacidade: 1000, volume: 500 },
    { nome: "Tanque 09", capacidade: 1000, volume: 500 },
    { nome: "Tanque 10", capacidade: 1000, volume: 500 },
    { nome: "Tanque 11", capacidade: 1000, volume: 500 },
    { nome: "Tanque 12", capacidade: 1000, volume: 500 },
    { nome: "Tanque 13", capacidade: 1000, volume: 500 },
]
export const Home = () => {
    return (
        <div className="flex flex-col  justify-center items-center h-screen w-full">
            <div className=" flex flex-col gap-4  h-full max-w-7xl w-full">
                <div className="w-full flex flex-row justify-between my-4">
                    <div className=" flex items-center">
                        <div className="w-full md:w-96 ">
                            <Input
                                color="blue"
                                label="Search"
                                icon={<IoMdSearch className="h-5 w-5" />}
                            />
                        </div>
                    </div>
                    <Button color="blue" className="normal-case">Add New...</Button>
                </div>
                <div className="grid grid-cols-4 w-full">
                    <h1 className="font-semibold flex justify-center">Reservoir</h1>
                    <h1 className="font-semibold flex justify-center">Capacity</h1>
                    <h1 className="font-semibold flex justify-center">Volume</h1>
                    <h1></h1>
                </div>               
                
                {reservatorios.map((reservatorio, index) => (
                    <div key={index} className=" grid grid-cols-4 justify-between w-full p-4 bg-white rounded-lg shadow-sm items-center">                        
                        <div className=" flex gap-16 items-center">
                            <div>
                            <TbDatabaseLeak size={40} className="text-blue-600" />
                            </div>                            
                            <span >{reservatorio.nome}</span>
                        </div>
                        <div className="flex justify-center">
                            <span>{reservatorio.capacidade} </span>
                        </div>
                        <div className="flex justify-center">
                            <span>{reservatorio.volume} </span>
                        </div>
                        <div className=" flex justify-center">
                            <Menu>
                                <MenuHandler>
                                    <IconButton color="blue" variant="outlined" size="sm">
                                        <SlOptionsVertical size={16} />
                                    </IconButton>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem className="flex gap-2 items-center justify-start"><PiEye size={16} />View</MenuItem>
                                    <MenuItem className="flex gap-2 items-center justify-start"><MdOutlineEdit size={16} />Edit</MenuItem>
                                    <MenuItem className="flex gap-2 items-center justify-start text-red-300 focus:text-red-400"><MdDeleteOutline size={16} />Delete</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>                      
                    </div>)
                )}                
            </div>
        </div>
    )
}