import axios from 'axios';
import { Alert, Container, Grid, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { ResultBox, FlightDeal, MobileSearchContainer, MobileResultBox, MobileResultDeals, FlightSearchContainer, MobileFlightNotFound, Filler } from "../components";
import './css/flights.css';
import MobileTicket from "../components/Mobile/MobileTickets/mobileticket";
import { tabTitle } from '../functions';



function Flights() {

  tabTitle('Flights | SkyClub India')

    const [isLoaded, setIsLoaded] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);

    const [flightData, setFlightData] = useState([]);
    const [index, setIndex] = useState([]);
    const [dep, setDep] = useState('');
    const [arr, setArr] = useState('');
    const [params, setParams] = useState({
      date_from: '',
      date_to: '',
    });

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_REACT_APP_API_URL,
      headers: { apikey: import.meta.env.VITE_REACT_APP_API_KEY },
      params: {
        fly_from: dep?.code,
        fly_to: arr?.code,
        date_from: params?.date_from,
        date_to: params?.date_to,
        curr: "INR",
        limit: 50,
        sort: "price",
        max_stopovers: 5
    }}

    const fetchData = async (config) => {
      try {
        var response = await axios.request(config);
        var result = await response.data;
        var flight_data = result["data"];
        var indexArray = []
        for (let i = 0; i < flight_data.length; i++) {
            indexArray.push(i);
        }
        setFlightData(flight_data);
        setIndex(indexArray);
        setButtonLoading(false)
        setIsLoaded(true)
        setError(false)
        console.log(flight_data)
      } catch (error) {
        setButtonLoading(false)
        setIsLoaded(false)
        setError(true)
        setErrorMessage(error);
        console.log(error)
      }
    }

    const handleDepChange = (e, v, r) => {
      if (r === "selectOption") {
        setDep(v);
      }
    }

    const handleArrChange = (e, v, r) => {
      if (r === "selectOption") {
        setArr(v);
      }
    }

    const handleChange = (e) => {
      const {name, value} = e.target;
      setParams((prev) => {
        return {...prev, [name]: value};
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setButtonLoading(true);
      fetchData(config);
    }
    



  return (
    <>
      <section style={{ padding: '1%' }}>
        <Container className="search-container" sx={{ display: {xs:'none', md:'block'}}}>
          <Container fixed className="search-wrapper" sx={{ mt: 0, pr: 2, pl: 2 }}>
            <form onSubmit={handleSubmit}>   
              <FlightSearchContainer 
                buttonLoading={buttonLoading} 
                change={handleChange}
                depChange={handleDepChange}
                arrChange={handleArrChange}
              />
            </form>
          </Container>
        </Container>
      </section>

      { error ?
        <Snackbar open={true} autoHideDuration={5000} >
          <Alert severity="error"  sx={{ width: '100%' }}>
            {errorMessage.response.status === 400 ? `The dates entered are absurd.` : `${errorMessage.message}`}
          </Alert>
        </Snackbar>
      :
      <></>
      }


      { isLoaded ? 
          <section style={{display: {xs: 'block', md: 'none'}}}>
            <Container sx={{pt:2, pb:2, pl:4, pr:4, display: {xs: 'block', md: 'none'} }}>
              {flightData.length != 0 ? 
                <MobileResultBox flight={flightData} depChange={handleDepChange} arrChange={handleArrChange} handleChange={handleChange} loadStatus={setIsLoaded} /> 
                :
                <></>
              }
              
            </Container>

            {flightData.length != 0 ? 
                <Container sx={{ marginTop: '7%', backgroundColor: '#f5f7fa', display: {xs: 'block', md: 'none'}, pb:1 }}>
                    {flightData.length!=0 ? <MobileResultDeals flight={flightData} /> : <></>}
                    <div style={{marginTop: '5%'}}>
                      {index?.map((i) => {
                            if (flightData.length === 0) {
                              return (<h1 key={i}>No flights found</h1>)
                            } else {
                              var flight = flightData[i]
                              return (<MobileTicket key={i} flight={flight} index={i} />) 
                            }
                      })}
                    </div>
                </Container> 
            :<MobileFlightNotFound />}

          </section>
        : 
          <section style={{ paddingInline: '5%' }}>
            <Container fixed sx={{ display:{xs:'block', md: 'none'}, bgcolor:'var(--gray2)', borderRadius:'0.4em', px:2, py:1, mt:2}}>
              <Typography variant="h6">Search Flights</Typography>
            </Container>
            <Container fixed sx={{ display:{xs:'block', md: 'none'}, backgroundColor: 'var(--text)', padding: '4%', borderRadius: '0.5em', mt:1 }}>
              <form onSubmit={handleSubmit}>
                <MobileSearchContainer depChange={handleDepChange} arrChange={handleArrChange} handleChange={handleChange} />
              </form>
            </Container>
          </section>
      }  
      




      <section>
        <Container fixed>
          { isLoaded ? 
            <>
              <Grid container sx={{mt:2, display: {xs:'none', md:'flex'}}}>
                  <Grid item xs={8} sx={{paddingInline: '5%', paddingBlock: '2%'}}>
                    {index?.map((i) => {
                      console.log(flightData)
                      if (flightData.length === 0) {
                        return (<h1 key={i}>No flights found</h1>)
                      } else {
                        var flight = flightData[i]
                        return (<FlightDeal key={i} index={i} flight={flight} />)
                      }
                    })}
                  </Grid>
                  <Grid item xs={4}>
                    {flightData.length === 0 ? <></> : <ResultBox flight={flightData} index={index} />}
                  </Grid>
              </Grid>

              <Container sx={{display: {xs:'block', md:'none'}}}>

              </Container>
            </>
          :
          <>
            <Filler />
          </>
          }
        </Container>
      </section>
        

    </>
  )

}

export default Flights;