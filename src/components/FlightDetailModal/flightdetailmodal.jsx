/* eslint-disable react/prop-types */

import { Box, Chip, Grid, Modal, Typography } from "@mui/material";
import { Airports } from "../../data";
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import LensRoundedIcon from '@mui/icons-material/LensRounded';
import { secondsToHoursMinutes } from "../../functions";


function FlightDetailModal(props) {

    let open = props.open;
    let close = props.close;
    let flight = props.flight;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        color: 'var(--dark)',
        borderRadius: '0.4em'
    };

    /* --------------------------- AIRLINE & CITY DATA -------------------------- */
  let airline = flight["airlines"][0];
  let departure = flight["cityCodeFrom"];
  let arrival = flight["cityCodeTo"];
  let departueCity = flight["cityFrom"];
  let arrivalCity = flight["cityTo"];
  let depAirport = ""
  let arrAirport = ""
    
  for (let i = 0; i < Airports.length; i++) {
    if (Airports[i]["code"] === flight['flyFrom']) {
      depAirport = Airports[i]["name"]
    } if (Airports[i]["code"] === flight['flyTo']) {
      arrAirport = Airports[i]["name"]
    }
  }

  /* -------------------------- AIRCRAFT DATE & TIME -------------------------- */

  let departureDateTime = new Date(flight["local_departure"]);
  let deparutreHour = departureDateTime.getUTCHours();
  let deparutreMinute = departureDateTime.getUTCMinutes();
  var departureTime = `${deparutreHour < 10 ? `0${deparutreHour}` : deparutreHour}:${deparutreMinute < 10 ? `0${deparutreMinute}` : deparutreMinute}`;
  const departureDate = `${departureDateTime.getUTCDate() < 10 ? `0${departureDateTime.getUTCDate()}`: departureDateTime.getUTCDate()}/${departureDateTime.getUTCMonth() + 1 < 10 ? `0${departureDateTime.getUTCMonth() + 1}`: departureDateTime.getUTCMonth() + 1}/${departureDateTime.getUTCFullYear().toString().slice(-2)}`;

  let arrivalDateTime = new Date(flight["local_arrival"]);
  let arrivalHour = arrivalDateTime.getUTCHours();
  let arrivalMinute = arrivalDateTime.getUTCMinutes();
  var arrivalTime = `${arrivalHour < 10 ? `0${arrivalHour}` : arrivalHour}:${arrivalMinute < 10 ? `0${arrivalMinute}` : arrivalMinute}`;
  const arrivalDate = `${arrivalDateTime.getUTCDate() < 10 ? `0${arrivalDateTime.getUTCDate()}` : arrivalDateTime.getUTCDate()}/${arrivalDateTime.getUTCMonth() + 1 < 10 ? `0${arrivalDateTime.getUTCMonth() + 1}` : arrivalDateTime.getUTCMonth()+1}/${arrivalDateTime.getUTCFullYear().toString().slice(-2)}`;


  /* ---------------------------- AIRCRAFT DETAILS ---------------------------- */
  let flightNumber = `${flight['route'][0]['airline']} ${flight['route'][0]['flight_no']}`;
  let luggage = flight['baglimit']['hold_weight'];
  let quality = Math.trunc(flight['quality']);
  let route = flight['route'];
  let routeLength = route.length - 1;
  var index = []
        for (let i = 0; i <routeLength; i++) {
            index.push(i);
        }

  return (
    <>
        <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Grid container>
            <Grid item xs={12}><img src={`https://pics.avs.io/200/80/${airline}.svg`} alt="airlines" style={{width: '20%'}} /></Grid>
        </Grid>
        <Grid container spacing={1} sx={{ color: 'var(--dark)', mt:'2%'}}>
                <Grid item xs={8}>
                    <Typography variant="h6"><PanoramaFishEyeRoundedIcon sx={{fontSize: '1rem', color: 'var(--indigo)'}} /> {departueCity} ({departure})</Typography>
                    <Typography sx={{fontSize: '0.8rem', ml: 3, color: 'gray'}}>{depAirport}</Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                    <Typography variant="h5" sx={{fontWeight: '700'}}>{departureTime}</Typography>
                    <Typography sx={{color:'gray', fontSize: '0.8rem'}}>Departure</Typography>
                </Grid>


                <Grid item xs={8}>
                    <Typography variant="h6"><LensRoundedIcon sx={{fontSize: '1rem', color: 'var(--indigo)'}} /> {arrivalCity} ({arrival})</Typography>
                    <Typography sx={{fontSize: '0.8rem', ml: 3, color: 'gray'}}>{arrAirport}</Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                    <Typography variant="h5" sx={{fontWeight: '700'}}>{arrivalTime}</Typography>
                    <Typography sx={{color:'gray', fontSize: '0.8rem'}}>Arrival</Typography>
                </Grid>
            </Grid>

            {routeLength != 0 ? 
                <Grid container sx={{mt:2, mb:1}}>
                    <Chip label="Stopovers at:" />
                    {index?.map((i) => {
                        let arrivalTime = new Date(route[i]['local_arrival'])
                        let departureTime = new Date(route[i+1]['local_departure'])
                        var diff = Math.abs(departureTime - arrivalTime);
                        return (<Chip key={i} className="stopover-label" label={`${route[i]['cityTo']} | ${secondsToHoursMinutes(diff/1000)}`} sx={{ml: 1}} />)
                    })}
                </Grid> 
            : <></>}

            


            <Grid container spacing={2} sx={{mt:1}}>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#f5f7fa', borderRadius: '0.4em', paddingInline: '5%', paddingBlock: '10%'}}>
                        <Typography sx={{fontSize: '0.8rem', color: 'gray'}}>Class Type</Typography>
                        <Typography sx={{ fontWeight: '700' }}>Economy</Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#f5f7fa', borderRadius: '0.4em', paddingInline: '5%', paddingBlock: '10%'}}>
                        <Typography sx={{fontSize: '0.8rem', color: 'gray'}}>Flight Number</Typography>
                        <Typography sx={{ fontWeight: '700' }}>{flightNumber}</Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#f5f7fa', borderRadius: '0.4em', paddingInline: '5%', paddingBlock: '10%'}}>
                        <Typography sx={{fontSize: '0.8rem', color: 'gray'}}>Luggage</Typography>
                        <Typography sx={{ fontWeight: '700' }}>{luggage}kg</Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt:1}}>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#f5f7fa', borderRadius: '0.4em', paddingInline: '5%', paddingBlock: '10%'}}>
                        <Typography sx={{fontSize: '0.8rem', color: 'gray'}}>Departure Date</Typography>
                        <Typography sx={{ fontWeight: '700' }}>{departureDate}</Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#f5f7fa', borderRadius: '0.4em', paddingInline: '5%', paddingBlock: '10%'}}>
                        <Typography sx={{fontSize: '0.8rem', color: 'gray'}}>Arrival Date</Typography>
                        <Typography sx={{ fontWeight: '700' }}>{arrivalDate}</Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{backgroundColor: '#f5f7fa', borderRadius: '0.4em', paddingInline: '5%', paddingBlock: '10%'}}>
                        <Typography sx={{fontSize: '0.8rem', color: 'gray'}}>Flight Quality</Typography>
                        <Typography sx={{ fontWeight: '700' }}>{quality}</Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
        </Modal>
    </>
  )
}

export default FlightDetailModal;