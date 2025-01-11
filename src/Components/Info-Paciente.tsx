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
        <Card style={{margin:'5%',boxShadow:'0 15px 8px 0 rgb(0, 0, 0,0.2), 0 6px 20px 0 rgb(0, 0, 0,0.2)'}} className={styles.BoxShadow}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
                            Nombres
                        </Typography>
                        <Typography className={styles.TypografyBox}>
                            {paciente?.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
                            Apellidos
                        </Typography>
                        <Typography className={styles.TypografyBox}>
                            {`${paciente?.fatherLastName} ${paciente?.motherLastName}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
                            Fecha de Nacimiento
                        </Typography>
                        <Typography className={styles.TypografyBox}>
                            {paciente?.bornDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="subtitle1" fontFamily={'times-new-roman'}>
                            Ocupacion
                        </Typography>
                        <Typography className={styles.TypografyBox}>
                            {paciente?.profession}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default PacienteInfo