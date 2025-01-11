import { Card, CardContent, Grid, TableContainer, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import styles from '../styles/global.module.css'
interface paciente{
    _id:string
    name: string
    fatherLastName: string
    motherLastName: string
    bornDate: string
    profession: string
    address: string
    municipio: string
    ci: string
    phone: string
    date: string
    createAt: string
    state: boolean
}
const PacienteInfo:React.FC<{id:string|string[]|null}>=({id})=>{
    const[paciente,setPaciente]=useState<paciente>()
    useEffect(()=>{
        GetPaciente()
    },[])
    const GetPaciente=async()=>{
        try{
            const res=await axios.get<paciente>(`${process.env.NEXT_PUBLIC_URL_API_BACKEND}paciente/${id}`)
            setPaciente(res.data)
        }
        catch(error:any){
            toast.error(error.response.data.message)
        }
    }
    return(
        // <Card style={{margin:'5%',boxShadow:'0 15px 8px 0 rgb(0, 0, 0,0.2), 0 6px 20px 0 rgb(0, 0, 0,0.2)'}} className={styles.BoxShadow}>
        //     <CardContent>
        //         <Grid container spacing={2}>
        //             <Grid item xs={12} sm={3}>
        //                 <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
        //                     Nombres
        //                 </Typography>
        //                 <Typography className={styles.TypografyBox}>
        //                     {paciente?.name}
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={12} sm={3}>
        //                 <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
        //                     Apellidos
        //                 </Typography>
        //                 <Typography className={styles.TypografyBox}>
        //                     {`${paciente?.fatherLastName} ${paciente?.motherLastName}`}
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={12} sm={3}>
        //                 <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
        //                     Fecha de Nacimiento
        //                 </Typography>
        //                 <Typography className={styles.TypografyBox}>
        //                     {paciente?.bornDate}
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={12} sm={3}>
        //                 <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
        //                     Ocupacion
        //                 </Typography>
        //                 <Typography className={styles.TypografyBox}>
        //                     {paciente?.profession}
        //                 </Typography>
        //             </Grid>
        //         </Grid>
        //     </CardContent>
        // </Card>
        <div className="flex justify-center">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead className="bg-sky-300 text-gray-700">
                    <tr>
                        <th className="py-2 px-4 text-left">Nombre(s)</th>
                        <th className="py-2 px-4 text-left">Apellido(s)</th>
                        <th className="py-2 px-4 text-left">Fecha de nacimiento</th>
                        <th className="py-2 px-4 text-left">Ocupación</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Ejemplo de filas */}
                    <tr className="border-t border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-4">Juan</td>
                        <td className="py-2 px-4">Pérez</td>
                        <td className="py-2 px-4">12/03/1990</td>
                        <td className="py-2 px-4">Ingeniero</td>
                    </tr>
                    <tr className="border-t border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-4">Ana</td>
                        <td className="py-2 px-4">Gómez</td>
                        <td className="py-2 px-4">24/07/1985</td>
                        <td className="py-2 px-4">Doctora</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default PacienteInfo