import { Button, Input, IconButton, Menu, MenuHandler, MenuItem, MenuList, } from "@material-tailwind/react"
import { IoMdSearch } from "react-icons/io";
import { TbDatabaseLeak } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { PiEye } from "react-icons/pi";
import { useNavigate } from "react-router";


const reservatorios = [
    { nome: "Sítio", capacidade: 1000, volume: 500 },
    { nome: "Rancho", capacidade: 1000, volume: 500 },
    { nome: "Casa", capacidade: 1000, volume: 500 },
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
export const ReservoirPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="flex flex-col w-full h-full gap-4 max-w-7xl">
                <div className="flex flex-row justify-between w-full my-4">
                    <div className="flex items-center ">
                        <div className="w-full md:w-96 ">
                            <Input
                                color="blue"
                                label="Search"
                                icon={<IoMdSearch className="w-5 h-5" />}
                            />
                        </div>
                    </div>
                    <Button color="blue" className="normal-case">Add New...</Button>
                </div>
                <div className="grid w-full grid-cols-4">
                    <h1 className="flex justify-center font-semibold">Reservoir</h1>
                    <h1 className="flex justify-center font-semibold">Capacity</h1>
                    <h1 className="flex justify-center font-semibold">Volume</h1>
                    <h1></h1>
                </div>

                {reservatorios.map((reservatorio, index) => (
                    <div key={index} className="grid items-center justify-between w-full grid-cols-4 p-4 bg-white rounded-lg shadow-sm ">
                        <div className="flex items-center gap-16 ">
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
                        <div className="flex justify-center ">
                            <Menu>
                                <MenuHandler>
                                    <IconButton color="blue" variant="outlined" size="sm">
                                        <SlOptionsVertical size={16} />
                                    </IconButton>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem onClick={() => { navigate(`/reservoir/${reservatorio.nome}`) }} className="flex items-center justify-start gap-2"><PiEye size={16} />View</MenuItem>
                                    <MenuItem className="flex items-center justify-start gap-2"><MdOutlineEdit size={16} />Edit</MenuItem>
                                    <MenuItem className="flex items-center justify-start gap-2 text-red-300 focus:text-red-400"><MdDeleteOutline size={16} />Delete</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>)
                )}
            </div>
        </div>
    )
}