import { Button } from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { toast } from "react-toastify";
import { UIContext } from "@/ui";
const DeletePaciente:React.FC<{id:string}>=({id})=>{
    const { openData } = useContext(UIContext);
    const deletePaciente=async()=>{
        console.log("delete "+id)
        try{
            const res=await axios.get(`${process.env.NEXT_PUBLIC_URL_API_BACKEND}paciente/state/${id}`)
            console.log(res.data)
            toast.success("Usuario eliminado")
            openData()
        }
        catch(error:any){
            toast.error(error.response.data.message)
        }
    }
    return(
    <>
    <Button onClick={deletePaciente}>
        <DeleteIcon style={{color:"red"}}/>
    </Button>
    </>)
}
export default DeletePaciente