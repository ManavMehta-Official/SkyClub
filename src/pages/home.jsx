import '../index.css';
import  Button  from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import airasia from '../images/airlines/airasia.svg';
import airindia from '../images/airlines/airindia.svg';
import goair from '../images/airlines/goair.svg';
import indigo from '../images/airlines/indigo.svg';
import spicejet from '../images/airlines/spicejet.svg';
import vistara from '../images/airlines/vistara.svg';


export default function Home() {

  const airlines = ["airasia", "airindia", "goair", "indigo", "spicejet", "vistara"];

    return (
      <div>


        {/* -------------------------------------------------------------------------- */
        /*                                HERO SECTION                                */
        /* -------------------------------------------------------------------------- */}
        <section className='hero-section'>
          <div class='hero-content'>
            <h1 className='hero-title'>Affordable flight tickets last minute.</h1>
            <h3 className='hero-subtitle'>Search the best flight deals for free. </h3>
            <Button disableRipple className='hero-btn'>Search Flights</Button>
          </div>
        </section>


        {/* -------------------------------------------------------------------------- */
        /*                              BENEFITS SECTION                              */
        /* -------------------------------------------------------------------------- */}
        <section class="grid-3-section">
          {/* <h1 className='section-heading'>The Benefits of SkyClub</h1> */}
          {/* <br></br><br></br> */}
          <Grid container>
            <Grid item xs={4} className='gridItem-holder'>
              <h1><TuneRoundedIcon className='grid-icon' /></h1>
              <h1 className='grid-icon-title'>Personalised Search</h1>
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage
              </p>
            </Grid>
            <Grid item xs={4} className='gridItem-holder' >
              <h1><FlightTakeoffRoundedIcon className='grid-icon' /></h1>
              <h1 className='grid-icon-title'>Find the best Deals</h1>
            </Grid>
            <Grid item xs={4} className='gridItem-holder'>
              <h1><AccessTimeRoundedIcon className='grid-icon' /></h1>
              <h1 className='grid-icon-title'>Save Time</h1>
            </Grid>
          </Grid>
        </section>


        {/* -------------------------------------------------------------------------- */
        /*                              AIRLINES SECTION                              */
        /* -------------------------------------------------------------------------- */}
        <section id="airlines-section">
          <h1>All your favourite airlines</h1>

            <img src={airasia} alt='airline logo' className='airline-logo'></img>
            <img src={indigo} alt='airline logo' className='airline-logo'></img>
            <img src={vistara} alt='airline logo' className='airline-logo'></img>
            
            <br></br>
            <img src={airindia} alt='airline logo' className='airline-logo'></img>
            <img src={spicejet} alt='airline logo' className='airline-logo'></img>
            <img src={goair} alt='airline logo' className='airline-logo'></img>
            

        </section>

      </div>
    );
  }
  

  // <h1 className='grid-icon-title'>Saves Time</h1>