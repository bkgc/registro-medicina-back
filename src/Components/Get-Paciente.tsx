"use client";

import { Button, Card, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DeletePaciente from "./Delete-Paciente";
import UpdatePaciente from "./Update-Paciente";
import { useRouter } from "next/router";
import { UIContext } from "@/ui";
import styles from '../styles/global.module.css'
// import tableStyles from '../styles/table.module.css'

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
const GetPaciente=()=>{
    const {getData,closeData}=useContext(UIContext);

    const [paciente,setPaciente]=useState<paciente[]>([])
    const router = useRouter();
    const InfoPaciente=(id:string)=>{
        router.push({
            pathname:'/pacienteInfo',
            query:{id:id}
        })
    }
    useEffect(()=>{
        Get()
    },[])
    useEffect(()=>{
        if(getData){
            Get()
            closeData()
        }
    },[getData])
    const  Get=async()=>{
        try{
            const user=await axios.get<paciente[]>(`${process.env.NEXT_PUBLIC_URL_API_BACKEND}paciente`)
            setPaciente(user.data)
        }
        catch(error:any){
            console.error("Error fetching pacientes:", error);
        }
        
    }
    return(
        <Card style={{boxShadow:'0 15px 8px 0 rgb(0, 0, 0,0.2), 0 6px 20px 0 rgb(0, 0, 0,0.2)'}} className={styles.BoxShadow}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow style={{background:"#45ada8"}}>
                        <TableCell >
                            <Typography className={styles.TitleHead}>
                                Opciones
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={styles.TitleHead}>
                                Nombres
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={styles.TitleHead}>
                                Apellido Paterno
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={styles.TitleHead}>
                                Apellido Materno
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={styles.TitleHead}>
                                C.I.
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography className={styles.TitleHead}>
                                Telefono
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paciente.map((user)=>(
                        <TableRow key={user._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        hover>
                            <TableCell align="center">
                                <DeletePaciente id={user._id}/>
                                <UpdatePaciente id={user._id}/>
                            </TableCell>
                            <TableCell align="center" onClick={()=>InfoPaciente(user._id)}>
                                <Typography  style={{fontFamily:'times-new-roman'}}>
                                    {user.name}
                                </Typography>
                            </TableCell>
                            <TableCell align="center" onClick={()=>InfoPaciente(user._id)}>
                                <Typography>
                                    {user.fatherLastName}
                                </Typography>
                            </TableCell>
                            <TableCell align="center" onClick={()=>InfoPaciente(user._id)}>
                                <Typography>
                                    {user.motherLastName}
                                </Typography>
                            </TableCell>
                            <TableCell align="center" onClick={()=>InfoPaciente(user._id)}>
                                <Typography>
                                    {user.ci}
                                </Typography>
                            </TableCell>
                            <TableCell align="center" onClick={()=>InfoPaciente(user._id)}>
                                <Typography>
                                    {user.phone}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Card>
    )
}
export default GetPaciente