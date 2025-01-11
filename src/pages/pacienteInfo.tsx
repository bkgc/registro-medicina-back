import PacienteInfo from "@/Components/Info-Paciente"
import PacienteRegistro from "@/Components/Registros-Paciente"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const InfoPacientePage=()=>{
    const router=useRouter()
    const {id}=router.query
    return(
        <div>
            {id!=undefined?(<>
                <PacienteInfo id={id}/>
                <PacienteRegistro id={id}/>
                </>):(<></>)}
        </div>
    )
}
export default InfoPacientePage