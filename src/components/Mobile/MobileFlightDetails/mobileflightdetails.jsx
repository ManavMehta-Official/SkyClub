/* eslint-disable react/prop-types */

import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import LensRoundedIcon from '@mui/icons-material/LensRounded';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Chip, Grid } from '@mui/material';
import { Airports } from '../../../data';
import { openInNewTab, secondsToHoursMinutes } from '../../../functions';

const drawerBleeding = 56;

const StyledBox = styled(Box)(() => ({
  backgroundColor: '#FFF'
}));

const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function MobileFlightDetails(props) {

    let open = props.open;
    let toggle = props.toggle;
    let flight = props.flight;

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

    let flightNumber = `${flight['route'][0]['airline']} ${flight['route'][0]['flight_no']}`;
    let luggage = flight['baglimit']['hold_weight'];
    let quality = Math.trunc(flight['quality']);
    let booking = flight["deep_link"]

    let departureDateTime = new Date(flight["local_departure"]);
    let deparutreHour = departureDateTime.getUTCHours();
    let deparutreMinute = departureDateTime.getUTCMinutes();
    const departureTime = `${deparutreHour < 10 ? `0${deparutreHour}` : deparutreHour}:${deparutreMinute < 10 ? `0${deparutreMinute}` : deparutreMinute}`;
    const departureDate = `${departureDateTime.getUTCDate() < 10 ? `0${departureDateTime.getUTCDate()}`: departureDateTime.getUTCDate()}/${departureDateTime.getUTCMonth() + 1 < 10 ? `0${departureDateTime.getUTCMonth() + 1}`: departureDateTime.getUTCMonth() + 1}/${departureDateTime.getUTCFullYear().toString().slice(-2)}`;

    let arrivalDateTime = new Date(flight["local_arrival"]);
    let arrivalHour = arrivalDateTime.getUTCHours();
    let arrivalMinute = arrivalDateTime.getUTCMinutes();
    const arrivalTime = `${arrivalHour < 10 ? `0${arrivalHour}` : arrivalHour}:${arrivalMinute < 10 ? `0${arrivalMinute}` : arrivalMinute}`;
    const arrivalDate = `${arrivalDateTime.getUTCDate() < 10 ? `0${arrivalDateTime.getUTCDate()}` : arrivalDateTime.getUTCDate()}/${arrivalDateTime.getUTCMonth() + 1 < 10 ? `0${arrivalDateTime.getUTCMonth() + 1}` : arrivalDateTime.getUTCMonth()+1}/${arrivalDateTime.getUTCFullYear().toString().slice(-2)}`;
    let route = flight['route'];
    let routeLength = route.length - 1;
    var index = []
        for (let i = 0; i <routeLength; i++) {
            index.push(i);
        }



  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggle(false)}
        onOpen={toggle(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'hidden',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}></Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Puller />

            <Grid container spacing={1} sx={{ color: 'var(--dark)', mt:'-2%'}}>
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
                <Grid container sx={{mt:2}}>
                    <Chip label="Stopovers at:" size="small" sx={{mb:1}} />
                    {index?.map((i) => {
                        let arrivalTime = new Date(route[i]['local_arrival'])
                        let departureTime = new Date(route[i+1]['local_departure'])
                        var diff = Math.abs(departureTime - arrivalTime);
                        return (<Chip size="small" key={i} className="stopover-label" label={`${route[i]['cityTo']} | ${secondsToHoursMinutes(diff/1000)}`} sx={{ml: 1}} />)
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
            <Button className='indigo-btn' sx={{mt: 2}} size="large" fullWidth onClick={() => {openInNewTab(booking)}}>BOOK FLIGHT</Button>

        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}

export default MobileFlightDetails;
