"use client";
import { UIContext } from "@/ui";
import { Box, Button, Drawer, Grid2, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { toast } from 'react-toastify';

const NewPaciente=()=>{
    const [openDrawer,setOpenDrawer]=useState<boolean>(false)
    const [paciente,setPaciente]=useState({
        name:'',
        fatherLastName: '',
        motherLastName: '',
        bornDate: '',
        profession: '',
        address: '',
        municipio: '',
        ci: '',
        phone: '',
        date: ''
    })
    const {openData}=useContext(UIContext);
    const handleChange=(e:any)=>{
        const {name,value}=e.target;
        setPaciente((prevData)=>({...prevData,[name]:value}))
    }
    const postNewPaciente=async()=>{
        try{
            const res=await axios.post(`${process.env.NEXT_PUBLIC_URL_API_BACKEND}paciente`,paciente)
            console.log(res.data)
            toast.success("Usuario creado exitosamente")
            setPaciente({
                name:'',
                fatherLastName: '',
                motherLastName: '',
                bornDate: '',
                profession: '',
                address: '',
                municipio: '',
                ci: '',
                phone: '',
                date: ''
            })
            setOpenDrawer(false)
            openData()    
        }
        catch(error:any)
        {
            const errors=error.response.data.message
            console.log(error.response.data.message)
            errors.forEach((element:any) => {
                toast.error(element)
            });
            // toast.error("Error: "+error.response.data.message)
            setOpenDrawer(false)
            setPaciente({
                name:'',
                fatherLastName: '',
                motherLastName: '',
                bornDate: '',
                profession: '',
                address: '',
                municipio: '',
                ci: '',
                phone: '',
                date: ''
            })
            setOpenDrawer(false)
        }
    }
    const resetData=()=>{
        setPaciente({
            name:'',
            fatherLastName: '',
            motherLastName: '',
            bornDate: '',
            profession: '',
            address: '',
            municipio: '',
            ci: '',
            phone: '',
            date: ''
        });
        setOpenDrawer(false);
        console.log("Cerrado")
    }
    return(
    <>
    {/* <ToastContainer/> */}
    <Button style={{background:"#45ada8"}} onClick={()=>setOpenDrawer(true)}>
        <Typography style={{color:"white"}}>
            Nuevo Paciente
        </Typography>
    </Button>
    <Drawer anchor="right" open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        <Box sx={{ width: 350 }} role="presentation">
            <Grid2 container spacing={2} margin={2}>
                <Grid2 size={12}>
                    <Typography  variant="h6">Nuevo Paciente</Typography>
                </Grid2>
                <Grid2 size={12}>
                    <TextField id="outlined-basic" label="Nombres" 
                        variant="outlined" color="success" style={{marginBottom:"15px"}}
                        onChange={handleChange} value={paciente.name} name="name">
                    </TextField>
                    <TextField id="outlined-basic" label="Apellido Paterno" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.fatherLastName} name="fatherLastName">
                    </TextField>
                    <TextField id="outlined-basic" label="Apellido Materno" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.motherLastName} name="motherLastName">
                    </TextField>
                    <TextField id="outlined-basic" label="Fecha de Nacimiento" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.bornDate} name="bornDate">
                    </TextField>
                    <TextField id="outlined-basic" label="Profesion" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.profession} name="profession">
                    </TextField>
                    <TextField id="outlined-basic" label="Direccion" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.address} name="address">
                    </TextField>
                    <TextField id="outlined-basic" label="Municipio" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.municipio} name="municipio">
                    </TextField>
                    <TextField id="outlined-basic" label="Carnet de Identidad" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.ci} name="ci">
                    </TextField>
                    <TextField id="outlined-basic" label="Telefono" style={{marginBottom:"15px"}}
                        variant="outlined" color="success" 
                        onChange={handleChange} value={paciente.phone} name="phone">
                    </TextField>
                </Grid2>
                <Grid2 size={12}>
                    <Button style={{background:"#45ada8"}} onClick={postNewPaciente}>
                        <Typography  style={{color:"#e5fcc2"}}>
                            Aceptar
                        </Typography>
                    </Button>
                    <Button style={{background:"red", marginLeft:"15px"}} onClick={resetData}>
                        <Typography style={{color:"#e5fcc2"}}>
                            Cancelar
                        </Typography>
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    </Drawer>
    </>)
}
export default NewPaciente