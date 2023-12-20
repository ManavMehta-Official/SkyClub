/* eslint-disable react/prop-types */

import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import LensRoundedIcon from '@mui/icons-material/LensRounded';
import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import { numberWithCommas, openInNewTab, secondsToHoursMinutes } from '../../../functions';
import MobileFlightDetails from '../MobileFlightDetails/mobileflightdetails';
import { useState } from 'react';

function MobileTicket(props) {

    let flight = props.flight;
    let index = props.index;
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    /* --------------------------- AIRLINE & CITY DATA -------------------------- */
    let airline = flight["airlines"][0];
    let departure = flight["cityFrom"];
    let arrival = flight["cityTo"];

    /* ---------------------------- AIRCRAFT DETAILS ---------------------------- */
    let flightQuality = Math.trunc(flight["quality"]);
    let cost = flight["conversion"]["INR"];
    let route = flight["route"];
    let bookingLink = flight["deep_link"]

    /* -------------------------- AIRCRAFT DATE & TIME -------------------------- */
    const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let duration = flight["duration"]["total"];

    let departureDateTime = new Date(flight["local_departure"]);
    var departureDate = `${day[departureDateTime.getUTCDay()]}, ${departureDateTime.getUTCDate()} ${month[departureDateTime.getUTCMonth()]}`


    /* --------------------------- CONDITION VARIABLES -------------------------- */
    let recommended = false;
    let qualityLabel = false;
    let stopovers = '';

    /* ------------------------------- CONDITIONS ------------------------------- */
    if (index === 0) { recommended = true } else { recommended = false }
    if (flightQuality >= 130) { qualityLabel = true } else { qualityLabel = false }
    if (route.length === 2) { stopovers = `${route.length - 1}-Stop` } else if (route.length > 1) { stopovers = `${route.length - 1}-Stops` } else { stopovers = 'Non-Stop' }

  return (
    <>
        <Container sx={{ backgroundColor: '#FFF', borderRadius: '0.5em', mb:5, paddingInline: '5%', paddingBlock: '4%'}} className='shadow'>
            <Grid container sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={8}><img src={`https://pics.avs.io/200/80/${airline}.svg`} alt="airlines" style={{width: '60%'}} /></Grid>
                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                <Chip sx={{color: 'var(--dark)', fontWeight: '500', borderRadius: '0.4em'}} label={departureDate} size="small" />
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ color: 'var(--dark)', mt:1, justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={7}>
                    <Typography variant="h6"><PanoramaFishEyeRoundedIcon sx={{fontSize: '1rem', color: 'var(--indigo)'}} /> {departure}</Typography>
                    <div style={{paddingLeft: '3%'}}>
                        <Typography sx={{borderLeft: '1.5px dashed #cdd5d9', pl:1, pt:1, fontSize: '0.8rem', color: 'gray'}}>{secondsToHoursMinutes(duration)}</Typography>
                        <Typography sx={{borderLeft: '1.5px dashed #cdd5d9', pl:1, pb:1, fontSize: '0.8rem', color: 'gray'}}>{stopovers}</Typography>
                    </div>
                    <Typography variant="h6"><LensRoundedIcon sx={{fontSize: '1rem', color: 'var(--indigo)'}} /> {arrival}</Typography>
                </Grid>
                <Grid item xs={5} sx={{ textAlign: 'center', borderLeft: '1.2px solid var(--muted)' }}>
                    <Typography variant="h5" sx={{fontWeight: '700',color:'var(--green)'}}>₹{numberWithCommas(cost)}</Typography>
                    <Button size="small" className="indigo-btn" sx={{mt:1, fontSize: '0.8rem', width: '60%'}} onClick={() => {openInNewTab(bookingLink)}}>BOOK</Button>
                </Grid>
                <Grid container sx={{borderTop: '1.2px dashed var(--muted)', pt:1, mt:1}}>
                    <Grid item xs={8}>
                        {recommended ? <Chip label="Recommended" className="recommended-label" size="small" /> : <Chip label="Economy" size="small" className="economy-labelMobile" /> } &nbsp;
                        {qualityLabel ? <Chip label="Premium" className="quality-label" size="small" /> : <></> }
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'right'}}><Button onClick={toggleDrawer(true)} size="small" sx={{fontSize:'0.7rem'}}>View Details</Button></Grid>
                </Grid>

            </Grid>
        </Container>

        <MobileFlightDetails open={open} toggle={toggleDrawer} flight={flight} />
    </>
  )
}

export default MobileTicket;