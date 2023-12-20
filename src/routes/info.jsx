import { Container, Grid, Typography } from "@mui/material";
import { logo } from "../assets";
import { tabTitle } from "../functions";

const updates = [
    'Added International Routes.',
    'New UI & UX.',
    'Better Mobile & Tablet Experience.',
    'Supports Direct & Layover Flights.',
    'Recommended & Flight Quality Labels.',
    'Fixed Calendar Showing Past Dates.'
]

const upcoming = [
    'Flight Price Tracking.',
    'Cheapest Deal Notifier.',
    'Display upto 2000 Flight Deals.'
]

const version = '1.1.0';


function Info() {

    tabTitle('Info | SkyClub India')

  return (
    <>
        <Container maxWidth="fixed" sx={{justifyContent:'center'}} className="meteor-bg">
            <Grid container sx={{mt:5}}>
                <Grid item md={3}></Grid>
                <Grid item xs={12} md={6} sx={{border:'1.2px solid var(--gray)', p:2, borderRadius:'0.4em'}}>
                    <Typography variant="h5" sx={{fontFamily:'var(--displayFont)', fontWeight:800, display:{xs:'none',md:'block'}}}><img src={logo} style={{width:'4%'}} />SkyClub India</Typography>
                    <Typography variant="h5" sx={{fontFamily:'var(--displayFont)', fontWeight:800, display:{xs:'block',md:'none'}}}><img src={logo} style={{width:'7%'}} />SkyClub India</Typography>

                    <Typography sx={{mt:1}}><b>Description:</b> A website for searching cheap domestic flights in India.</Typography>
                    <Typography><b>Github Repository:</b> <a href="https://github.com/ManavMehta-Official/SkyClub" target="_blank" rel="noreferrer" style={{color:'var(--indigo)'}}>SkyClub India</a></Typography>
                    <Typography><b>Developed by:</b> <a href="https://github.com/ManavMehta-Official/" target="_blank" rel="noreferrer" style={{color:'var(--indigo)'}}>Manav Mehta</a></Typography>
                    <Typography><b>Version:</b> {version}</Typography>
                </Grid>
                <Grid item md={3}></Grid>
            </Grid>

            <Grid container sx={{mt:4, justifyContent:'center'}}>
                <Grid item xs={12} md={5} sx={{border:'1.2px solid var(--gray)', p:2, borderRadius:'0.4em', mb:4}}>
                    <Typography variant="h5" sx={{fontWeight:800, mb:2}}>🟢 What&apos;s New?</Typography>
                    {updates.map((update) => {
                        return(<Typography key={update} sx={{mb:1}}>✨ {update}</Typography>)
                    })}
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={12} md={5} sx={{border:'1.2px solid var(--gray)', p:2, borderRadius:'0.4em', mb:4}}>
                    <Typography variant="h5" sx={{fontWeight:800, mb:2}}>🔴 Upcoming Updates!</Typography>
                    {upcoming.map((upcoming) => {
                        return(<Typography key={upcoming} sx={{mb:1}}>⚡️ {upcoming}</Typography>)
                    })}
                </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default Info;