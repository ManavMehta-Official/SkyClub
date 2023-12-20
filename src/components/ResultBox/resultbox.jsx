/* eslint-disable react/prop-types */

import { Button, Chip, Container, Typography } from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Airports } from "../../data";
import { numberWithCommas } from "../../functions";

function ResultBox(props) {

  let flight = props.flight;
  let index = props.index;
  let departure = flight[0]['cityCodeFrom'];
  let arrival = flight[0]['cityCodeTo'];
  let costStart = flight[0]['conversion']['INR'];
  let costEnd = flight[flight.length - 1]['conversion']['INR'];
  let depCity = flight[0]['cityFrom'];
  let arrCity = flight[0]['cityTo'];

  let depAirport = ""
  let arrAirport = ""
    
  for (let i = 0; i < Airports.length; i++) {
    if (Airports[i]["code"] === flight[0]['flyFrom']) {
      depAirport = Airports[i]["name"]
    } if (Airports[i]["code"] === flight[0]['flyTo']) {
      arrAirport = Airports[i]["name"]
    }
  }


  return (
    <>
    <Container sx={{ mt: 2, paddingBlock: '5%', borderRadius: '0.4rem', position: 'sticky', top:20, bottom:20 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: '800' }}>{departure} <CompareArrowsIcon /> {arrival}</Typography>
        <Typography sx={{ textAlign: 'center', mt:1, borderBottom: '1.5px solid var(--gray)', pb:2 }}>{index.length} Flights Found</Typography>

        <Typography sx={{mt: 4}}><Chip label="Departure City" className="upgrade-label" size="small" /> &nbsp; {depCity}</Typography>
        <Typography sx={{mt:1}}><Chip label="Airport" className="upgrade-label" size="small" /> &nbsp; {depAirport}</Typography>

    
        <Typography sx={{mt:4}}><Chip label="Arrival City" className="upgrade-label" size="small" /> &nbsp; {arrCity}</Typography>
        <Typography sx={{mt:1}}><Chip label="Airport" className="upgrade-label" size="small" /> &nbsp; {arrAirport}</Typography>


        <Typography sx={{mt:4}}><Chip label="Price Range" className="economy-label" size="small" /> &nbsp; ₹{numberWithCommas(costStart)} &nbsp; - &nbsp; ₹{numberWithCommas(costEnd)}</Typography>
        <Typography sx={{mt:1}}><Chip label="Fare Category" className="economy-label" size="small" /> &nbsp; Economy</Typography>



        <Button sx={{mt:10}} onClick={() => {window.location.href="#"}} className='indigo-btn' fullWidth>Scroll To Top</Button>

    </Container>
    </>
  )
}

export default ResultBox;