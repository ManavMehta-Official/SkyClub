import { Grid, IconButton, Typography } from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import aircraft from '../../assets/svgs/aircraft.svg';

const data = [
    {
        from: 'Delhi',
        to: 'Mumbai',
        duration: '2h 15m',
        distance: '1148km'
    }, 
    {
        from: 'Bangalore',
        to: 'Delhi',
        duration: '2h 50m',
        distance: '1740km'
    },
    {
        from: 'Mumbai',
        to: 'Pune',
        duration: '0h 55m',
        distance: '118km'
    },
]



function Filler() {
  return (
    <>
            <Grid container spacing={2} sx={{mt:5, justifyContent:'center', alignItems:'center'}}>
                <Grid item xs={12} md={6} sx={{display:{xs:'none', md:'block'}}}>
                    <Typography variant="h4" sx={{fontWeight:700}}><i className="indigo fw-900">#</i> Popular Routes</Typography>

                    {data.map((i) => {
                        return <div className="route-card" key={i.distance}>
                            <Grid container sx={{justifyContent:'center', alignItems:'center'}}>
                                <Grid item md={6} xs={8} sx={{borderRight: '1.2px solid gray'}}>
                                    <Typography sx={{textAlign:'center'}} className="fw-700" variant="h6">{i.from} <IconButton><CompareArrowsIcon sx={{color:'var(--indigo)'}} /></IconButton> {i.to}</Typography>
                                </Grid>
                                <Grid item md={6} xs={4} sx={{textAlign:'center'}}>
                                    <Typography>
                                        <IconButton><AccessTimeIcon sx={{color:'var(--indigo)'}} /></IconButton>{i.duration} 
                                        &nbsp; 
                                        <IconButton><LocationOnRoundedIcon sx={{color:'var(--indigo)'}} /></IconButton>{i.distance}</Typography>
                                </Grid>
                            </Grid>
                        </div>
                    })}


                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={aircraft} alt="aircraft airplane svg" width="100%" />
                </Grid>
            </Grid>
    </>
  )
}

export default Filler;