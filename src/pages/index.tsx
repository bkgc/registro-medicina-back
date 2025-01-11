import GetPaciente from "@/Components/Get-Paciente";
import NewPaciente from "@/Components/New-Paciente";
import { Grid2, Typography } from "@mui/material";
export default function Home() {
  return (
    <>
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <div style={{background:"#45ada8"}}>
          <Typography>fafwafw</Typography>
        </div>
      </Grid2>
      <Grid2 size={2}>
        
      </Grid2>
      <Grid2 size={8}>
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <NewPaciente></NewPaciente>
          </Grid2>
          <Grid2 size={12}>
            <GetPaciente></GetPaciente>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={2}>
      </Grid2>
    </Grid2>
    </>
  );
}
