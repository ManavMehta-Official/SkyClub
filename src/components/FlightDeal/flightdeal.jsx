/* eslint-disable react/prop-types */

import { Button, Chip, Grid, Typography, Tooltip } from "@mui/material";
import { numberWithCommas, openInNewTab, secondsToHoursMinutes } from "../../functions";
import FlightDetailModal from "../FlightDetailModal/flightdetailmodal";
import { useState } from "react";

function FlightDeal(props) {



  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let flight = props.flight;
  let index = props.index;

   /* --------------------------- AIRLINE & CITY DATA -------------------------- */
   let airline = flight["airlines"][0];
   let departure = flight["cityCodeFrom"];
   let arrival = flight["cityCodeTo"];
   let departureCity = flight["cityFrom"];
   let arrivalCity = flight["cityTo"];

   /* ---------------------------- AIRCRAFT DETAILS ---------------------------- */
  let flightQuality = Math.trunc(flight["quality"]);
  let cost = flight["conversion"]["INR"];
  let route = flight["route"];
  let cabin = flight["route"][0]["fare_category"]
  let bookingLink = flight["deep_link"]

  /* -------------------------- AIRCRAFT DATE & TIME -------------------------- */
  const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  let departureDateTime = new Date(flight.local_departure);
  let deparutreHour = departureDateTime.getUTCHours();
  let deparutreMinute = departureDateTime.getUTCMinutes();
  let arrivalDateTime = new Date(flight.local_arrival);
  let arrivalHour = arrivalDateTime.getUTCHours();
  let arrivalMinute = arrivalDateTime.getUTCMinutes();

  let departureTime = `${deparutreHour < 10 ? `0${deparutreHour}` : deparutreHour}:${deparutreMinute < 10 ? `0${deparutreMinute}` : deparutreMinute}`;
  let departureDate = `${day[departureDateTime.getUTCDay()]}, ${departureDateTime.getUTCDate()} ${month[departureDateTime.getUTCMonth()]}`;
  let arrivalTime = `${arrivalHour < 10 ? `0${arrivalHour}` : arrivalHour}:${arrivalMinute < 10 ? `0${arrivalMinute}` : arrivalMinute}`;
  let duration = flight["duration"]["total"];



  /* ------------------------- CONDITION VARIABLES ------------------------ */
  let cabinClass = '';
  let cabinClassStyle = 'economy-label';
  let recommended = false;
  let qualityLabel = false;
  let stopovers = '';

  /* ------------------------------- CONDITIONS ------------------------------- */
  if (index === 0) { recommended = true } else { recommended = false }
  if (cabin === "M" || cabin === "W") {cabinClass = 'Economy'} else if (cabin === 'C') { cabinClass = 'Business'; cabinClassStyle = 'upgrade-label' } else { cabinClass = 'First Class'; cabinClassStyle = 'upgrade-label' }
  if (flightQuality >= 130) { qualityLabel = true } else { qualityLabel = false }
  if (route.length === 2) { stopovers = `${route.length - 1} Stop` } else if (route.length > 1) { stopovers = `${route.length - 1} Stops` } else { stopovers = 'Non-stop' }

  return (
    <> 
    <div style={{ backgroundColor: 'var(--text)', paddingInline: '2%', paddingTop: '4%', paddingBottom: '2%', borderRadius: '0.8em', marginBottom: '7%' }}>
          <Grid container sx={{ paddingInline: '2%' }}>
            <Grid item xs={6}>
              <img src={`https://pics.avs.io/200/80/${airline}.svg`} alt="airlines" style={{width: '40%'}} />
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              {recommended ? (<Tooltip title="Cheapest Flight"><Chip label="Recommended" className="recommended-label" size="small" /></Tooltip>) : <></> } 
              {qualityLabel ? (<>&nbsp; <Tooltip title="Flight Quality more than 130"><Chip label="Premium Flying" className="quality-label" size="small" /></Tooltip></>) : <></> }
          
            </Grid>
          </Grid>

          <Grid container sx={{ color: 'var(--dark)', mt:4, textAlign: 'center', borderBottomLeftRadius: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={3}>
              <Typography>{departureCity}</Typography>
              <Typography variant="h5" sx={{ fontWeight: '700' }}>{departure}</Typography>
              <Typography>{departureTime}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{departureDate}</Typography>
              <Typography sx={{ borderTop: '2px dashed #c4c4c4', marginBlock: '2%' }}></Typography>
              <Typography>{secondsToHoursMinutes(duration)}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{arrivalCity}</Typography>
              <Typography variant="h5" sx={{ fontWeight: '700' }}>{arrival}</Typography>
              <Typography>{arrivalTime}</Typography> 
            </Grid>
            <Grid item xs={3} sx={{ borderLeft: '1.5px solid var(--muted)' }}>
            <Typography variant="h5" sx={{ fontWeight: '700', color: '#19a096' }}>₹ {numberWithCommas(cost)}</Typography> 
              <Button className='indigo-btn' sx={{mt:1, width:'60%'}} onClick={() => {openInNewTab(bookingLink)}}>BOOK</Button>
            </Grid>
          </Grid>

          <Grid container sx={{ mt: 2, borderTop: '1.2px dashed var(--muted)', paddingTop: '2%', borderWidth: '0.12rem', color: 'var(--dark)' }}>
            <Grid item xs={8}>
              <Chip label={cabinClass} className={cabinClassStyle} /> &nbsp;
              <Chip label={stopovers} /> 
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'right' }}>
              <Button sx={{textTransform: 'none'}} onClick={handleOpen}>&nbsp;View Details</Button>
            </Grid>

            <div>
            <FlightDetailModal open={open} close={handleClose} flight={flight} />
            </div>
            
          </Grid>
        </div>
        
    </>
  )
}

export default FlightDeal;