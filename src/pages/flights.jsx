import { TextField, Grid, Button, Accordion, AccordionDetails, AccordionSummary, Typography, Chip, Autocomplete } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import LoadHelperText from "../components/LoadHelperText/loadhelpertext";
import Errors from "../components/Errors/errors";
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import FlightLandRoundedIcon from '@mui/icons-material/FlightLandRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import WorkIcon from '@mui/icons-material/Work';
import axios from "axios";
import fareClassData from "../data/fareClassData";
import IndianAirports from "../data/IndianAirports";

const API_KEY = "Yqcc5x_pmmngpq4f9_LHvkzIcibzPX01";


export default function Flights() {

  /* -------------------------------------------------------------------------- */
  /*                           UX IMPROVING FUNCTIONS                           */
  /* -------------------------------------------------------------------------- */



  /* --------------------- ADDS COMMA TO THE TICKET PRICE --------------------- */
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /* ------------------ CONVERTS SECONDS INTO HOURS & MINUTES ----------------- */
  function secondsToHoursMinutes(x) {
    var hours = Math.trunc(x/3600)
    var minutes = (x % 3600)/100
    return `${hours}h ${minutes}m`
  }

  /* --------------------- OPENS BOOKING LINK IN NEW TAB ---------------------- */
  function openInNewTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }



  /* -------------------------------------------------------------------------- */
  /*                             USESTATE VARIABLES                             */
  /* -------------------------------------------------------------------------- */


  /* ------------------------------ FORM USESTATES ---------------------------- */
  const [buttonLoading, setButtonLoading] = useState(false);
  const [depParam, setDepParam] = useState(null);
  const [arrParam, setArrParam] = useState(null);
  const [params, setParams] = useState({
    date_from: "",
    date_to: "",
  });
  
  /* ------------------------- ERROR HANDLING USESTATE ------------------------ */
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  const [loading, setLoading] = useState(true);


  /* ----------------------- DATA DISPLAY & API USESTATE ---------------------- */
  const [index, setIndex] = useState([]);

  const [airline, setAirline] = useState([]); // Airline of the flight
  const [flight, setFlight] = useState([]); // Flight number of the airplane

  const [departure, setDeparture] = useState([]); // Departure Location
  const [depTime, setDepTime] = useState([]); // Departure Time
  const [depDate, setDepDate] = useState([]); // Departure Date

  const [duration, setDuration] = useState([]); // Flight Duration
  const [qaulity, setQuality] = useState([]); // Quality Level of flight

  const [arrival, setArrival] = useState([]); // Arrival Location
  const [arrTime, setArrTime] = useState([]); // Arrival Time
  const [arrDate, setArrDate] = useState([]); // Arrival Date

  const [price, setPrice] = useState([]); // Cost of flight ticket
  const [fareClass, setFareClass] = useState([]); // Seat Category (Economy/Business/FirstClass)
  const [bookLink, setBookLink] = useState([]); // Booking link for the flight
  
  const [cabin, setCabin] = useState([]); // Weight of cabin baggage
  const [luggage, setLuggage]  = useState([]); // Weight of check-in baggage





/* -------------------------------------------------------------------------- */
/*                              API FETCH RESULTS                             */
/* -------------------------------------------------------------------------- */

  const fetchData = async (config) => {
    try {
      var response = await axios.request(config);
      var result = await response.data;
      var flight_data = result["data"];
      console.log(result);
      console.log(flight_data);
      var indexArray = []
      for (let i = 0; i < flight_data.length; i++) {
          indexArray.push(i);
          console.log(indexArray)
      }
      setAirline(flight_data);
      setFlight(flight_data);
      setDeparture(flight_data);
      setArrival(flight_data);
      setPrice(flight_data);
      setDepTime(flight_data);
      setArrTime(flight_data);
      setDuration(flight_data);
      setIndex(indexArray)
      console.log(index)
      setDepDate(flight_data);
      setArrDate(flight_data);
      setBookLink(flight_data);
      setCabin(flight_data);
      setLuggage(flight_data);
      setQuality(flight_data);
      setFareClass(flight_data);
      setButtonLoading(false);
      setLoading(false);

    } catch (error) {
      console.log(error)
      setErr(true);
      setButtonLoading(false);
      setErrMsg(error)
    }
  }


  /* -------------------------------------------------------------------------- */
  /*                          API SEARCH PARAM SETTERS                          */
  /* -------------------------------------------------------------------------- */

  /* ------------------ FOR SETTING 'date_from' AND 'date_to' ----------------- */
  const handleChange = (e) => {
    const {name, value} = e.target;
    setParams((prev) => {
      return {...prev, [name]: value};
    })
    console.log(params)
  }

  /* ------------------------- FOR SETTING 'fly_from' ------------------------- */
  const handleDepChange = (e, v, r) => {
    if (r === "selectOption") {
      setDepParam(v);
    }
    console.log({depParam}, {arrParam})
  }

/* -------------------------- FOR SETTING 'fly_to' -------------------------- */
  const handleArrChange = (e, v, r) => {
    if (r === "selectOption") {
      setArrParam(v);
    }
    console.log({depParam}, {arrParam})
  }

  /* ------------------------ FOR HANDLING FORM SUBMIT ------------------------ */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(params);
    setLoading(true);
    setButtonLoading(true);
    setErr(false)
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.tequila.kiwi.com/v2/search',
      headers: { apikey: API_KEY },
      params: {
        fly_from: depParam?.IATA,
        fly_to: arrParam?.IATA,
        date_from: params.date_from,
        date_to: params.date_to,
        curr: "INR",
        limit: 5,
        sort: "price",
        max_stopovers: 0
      }
    }
    fetchData(config);
  }


  

/* -------------------------------------------------------------------------- */
/*                                UI RENDERING                                */
/* -------------------------------------------------------------------------- */

    return(
      <>
        <section id="search-flights">
            <div className="search-container">

            
            {/* ------------------------------- SEARCH FORM ------------------------------ */}
            <form onSubmit={handleSubmit} style={{ justify: 'flex-end', alignItems: "center" }}>

                <Grid container style={{ marginBottom: "2%"}} spacing={2}>
                  <Grid item xs={6}>
                    <Autocomplete
                      options={IndianAirports}
                      groupBy={(option) => option.state}
                      getOptionLabel={(option) => `${option.location} (${option.IATA})` || ""}
                      sx={{ width: "100%" }}
                      onChange={handleDepChange}
                      renderInput={(params) => <TextField {...params} label="Departure" />}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      options={IndianAirports}
                      groupBy={(option) => option.state}
                      getOptionLabel={(option) => `${option.location} (${option.IATA})` || ""}
                      sx={{ width: "100%" }}
                      onChange={handleArrChange}
                      renderInput={(params) => <TextField {...params} label="Arrival" />}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: "2%"}}>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker format="DD/MM/YYYY" label="Search From Date" onChange={date => handleChange({ target: { value:date.format("DD/MM/YYYY"), name: "date_from" } })} slotProps={{ textField: { fullWidth: true } }} />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker format="DD/MM/YYYY" label="Search To Date" onChange={date => handleChange({ target: { value:date.format("DD/MM/YYYY"), name: "date_to" } })} slotProps={{ textField: { fullWidth: true } }} />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <div style={{ textAlign: "center"}}>
                  {
                  buttonLoading ? (<Button disabled className="submit-btnDis" variant="contained" disableElevation>Searching...</Button>)
                  :
                  (<Button type="submit" className="submit-btn" variant="contained" disableElevation>Search Flights</Button>)
                  }
                </div>
              
            </form>

            </div>
        </section>



        {/* ---------------------------- RESULT CONTAINER ---------------------------- */}
        {err ? (
        <section className="loader-container">
          <div className="loader-wrapper">
          <h1>⛔️ ERROR</h1>
          <code className="err-code">{errMsg.message}</code> <br></br><br></br>
          <code className="err-code" style={{ backgroundColor: "rgba(255, 255, 0, 0.487)" }}><a href="https://restfulapi.net/http-status-codes/">Error Code to message</a></code>
          <Errors/>
          </div>
        </section>
        ) : 

        <section className="result-container">
            {loading ? (<LoadHelperText />)
             : 
            <div>
              <div style={{ marginBottom: "5%" }}>
                  <h1>{depParam?.location}&nbsp;<CompareArrowsRoundedIcon />&nbsp;{arrParam?.location}</h1>
                  <p style={{ marginTop: '-2%' }}>{`Showing (${airline.length}) results`}</p>
              </div>
              {index?.map((i) => {
                if (airline.length === 0) {
                  return (<h1>No Flights found!</h1>)
                } else {
              var plane = airline[i]['airlines']
              var air_logo = `https://pics.avs.io/200/80/${plane}.svg`
              var flightNo = flight[i]["route"][0]["flight_no"]

              var dep_location = departure[i]["cityCodeFrom"]
              var arr_location = arrival[i]["cityCodeTo"]

              var loc_dep_time = new Date(depTime[i]["local_departure"])
              var dep_time = `${loc_dep_time.getUTCHours()}:${(loc_dep_time.getUTCMinutes() < 10 ? '0' : '') + loc_dep_time.getUTCMinutes()}`;
              var loc_arr_time = new Date(arrTime[i]["local_arrival"])
              var arr_time = `${loc_arr_time.getUTCHours()}:${(loc_arr_time.getUTCMinutes() < 10 ? '0' : '') + loc_arr_time.getUTCMinutes()}`;

              var dep_date = new Date(depDate[i]["local_departure"])
              dep_date = `${dep_date.getUTCDate()}/${dep_date.getUTCMonth()}/${dep_date.getUTCFullYear()}`
              var arr_date = new Date(arrDate[i]["local_arrival"])
              arr_date = `${arr_date.getUTCDate()}/${arr_date.getUTCMonth()}/${arr_date.getUTCFullYear()}`

              var flight_duration = duration[i]["duration"]["total"];
              var flight_quality = Math.trunc(qaulity[i]["quality"]);
              var flight_class = fareClass[i]["route"][0]["fare_category"];
              flight_class = fareClassData[flight_class];

              var cost = price[i]["conversion"]["INR"];
              var booking = bookLink[i]["deep_link"];

              var cabin_luggage = cabin[i]["baglimit"]["hand_weight"];
              var check_in_luggae = luggage[i]["baglimit"]["hold_weight"];
              
              return (
                <>
                <Grid container className="search-result" justify="flex-end" alignItems="center">
                    <Grid item xs={2}>
                        <img src={air_logo} alt="airline logo" className="logo-contain"></img>
                    </Grid>
                    <Grid item xs={2}>
                      <h1><FlightTakeoffRoundedIcon style={{ fontSize: "2rem" }} /></h1>
                      <h2 style={{ marginTop: "-18%" }}>{dep_time}</h2>
                      <p style={{ marginTop: "-15%" }}>{dep_location}</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p style={{ verticalAlign: 'auto' }}>{secondsToHoursMinutes(flight_duration)}</p>
                      <hr className="route-hr" style={{ marginTop: "-8%" }} />
                      <p className="text-muted" style={{ marginTop: "-3%" }}><Chip icon={<CompareArrowsRoundedIcon />} size="small" label="Direct" /></p>
                    </Grid>
                    <Grid item xs={2}>
                      <h1><FlightLandRoundedIcon style={{ fontSize: "2rem" }} /></h1>
                      <h2 style={{ marginTop: "-18%" }}>{arr_time}</h2>
                      <p style={{ marginTop: "-15%" }}>{arr_location}</p>
                    </Grid>
                    <Grid item xs={2}>
                      <h1><span>₹ {numberWithCommas(cost)}</span></h1>
                    </Grid>
                    <Grid item xs={2}>
                    <Button variant="contained" color="success" disableElevation className="book-btn" onClick={ () => {openInNewTab(booking)} }>
                      book
                    </Button>
                     
                      
                      
                    
                    </Grid>

                    <Accordion className="accordion" style={{ width: "100%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography style={{ fontSize: "0.8rem", fontWeight: '600' }}>
                        <Chip icon={<FlightTakeoffRoundedIcon color="#FFF" />} label={dep_date} size="small" sx={{ backgroundColor: "#1565c0", color:"#FFF" }} className="acc-chip" /> &nbsp; <Chip icon={<AirplaneTicketIcon color="#FFF" />} label={flight_class} size="small" sx={{ backgroundColor: "#2FB390", color: "#FFF" }} className="acc-chip" />
                        </Typography>
                        &nbsp;&nbsp;&nbsp;
                      </AccordionSummary>
                    <AccordionDetails style={{ width: "100%" }}>
                        <div style={{ width: "100%", textAlign: "left" }}>
                          <h1>{depParam?.location}&nbsp;<CompareArrowsRoundedIcon />&nbsp;{arrParam?.location}</h1>
                          <p style={{ marginTop: "-1%" }}><b>From:</b> {depParam?.airport}</p>
                          <p style={{ marginTop: "-1%" }}><b>To:</b> {arrParam?.airport}</p>

                          <br></br>

                          <Grid container justify="flex-end" alignItems="center"> 
                            <Grid item xs={4} className="detail-container">
                                <Chip icon={<FlightTakeoffRoundedIcon color="#fff" />} label="Departure Details" size="large" className="detail-chip" />
                                <p>Departure Date: {dep_date}</p>
                                <p>Departure Time: {dep_time}</p>
                            </Grid>
                            <Grid item xs={4} className="detail-container"></Grid>
                            <Grid item xs={4} className="detail-container">
                                <Chip icon={<FlightLandRoundedIcon color="#fff" />} label="Arrival Details" size="large" className="detail-chip" />
                                <p>Arrival Date: {arr_date}</p>
                                <p>Arrival Time: {arr_time}</p>
                            </Grid>
                          </Grid>

                            <br></br>

                          <Grid container justify="flex-end" alignItems="center"> 
                            <Grid item xs={4} className="detail-container">
                                <Chip icon={<AirplanemodeActiveIcon color="#fff" />} label="Aircraft Details" size="large" className="detail-chip" />
                                <p>Flight Number: {plane}-{flightNo}</p>
                                <p>Flight Quality: {flight_quality}</p>
                            </Grid>
                            <Grid item xs={4} className="detail-container"></Grid>
                            <Grid item xs={4} className="detail-container">
                                <Chip icon={<WorkIcon color="#fff" />} label="Luggage Details" size="large" className="detail-chip" />
                                <p>Cabin Bag Weight: {cabin_luggage}Kg</p>
                                <p>Check-in Bag Weight: {check_in_luggae}Kg</p>
                            </Grid>
                          </Grid>

                        </div>
                      </AccordionDetails>
                    </Accordion>
                    
                </Grid>

                </>
              )}
            })}
            </div>}
                
        </section>}
      </>
    )
}