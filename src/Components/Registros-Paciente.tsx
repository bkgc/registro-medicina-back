import { Card, CardContent,  Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
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
const PacienteRegistro:React.FC<{id:string|string[]|undefined}>=({id})=>{
    const[paciente,setPaciente]=useState<paciente>()
    useEffect(()=>{
        GetPaciente()
    },[])
    const GetPaciente=async()=>{
        try{
            const res=await axios.get<paciente>(`${process.env.NEXT_PUBLIC_URL_API_BACKEND}paciente/${id}`)
            console.log("DATA",res.data)
            setPaciente(res.data)
        }
        catch(error:any){
            toast.error(error.response.data.message)
        }
    }
    return(
        <Card style={{boxShadow:'0 15px 8px 0 rgb(0, 0, 0,0.2), 0 6px 20px 0 rgb(0, 0, 0,0.2)'}} className={styles.BoxShadow} >
            <CardContent>
              <Table>
                <TableContainer>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={12} align="center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" align="center">Fecha</Typography>
                      </TableCell>
                      <TableCell>
                      <Typography variant="h6" align="center">Hora</Typography>
                      </TableCell>
                      <TableCell>
                      <Typography variant="h6" align="center">Edad</Typography>
                      </TableCell>
                      <TableCell>
                      <Typography variant="h6" align="center">Peso</Typography>
                        
                      </TableCell>
                      <TableCell>
                      <Typography variant="h6" align="center">Talla</Typography>
                      
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" align="center">I.M.C.</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </TableContainer>
              </Table>
            </CardContent>
        </Card>
    )
}
export default PacienteRegistro