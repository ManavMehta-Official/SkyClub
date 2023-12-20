/* eslint-disable react/prop-types */

import { CircularProgress, Grid, IconButton, Tooltip } from "@mui/material";
import AutoComplete from "../../SearchFields/AutoComplete/autocomplete";
import DateField from "../../SearchFields/DateField/datefield";
import SearchRounded from "@mui/icons-material/SearchRounded";

function FlightSearchContainer(props) {
  return (
    <>
        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', mt:0 }}>
              <Grid item xs={3}>
                <AutoComplete key="departure" type="Departure" changeType={props.depChange} />
              </Grid>
              {/* <Grid item xs={1} sx={{ textAlign: 'center' }}>
                <Tooltip title="Reverse Destinations"><Button onClick={reverseDestinations} className="indigo-btn" size="small" sx={{ borderRadius: '100em', paddingInline: '0%' }}><CompareArrows /></Button></Tooltip>
              </Grid> */}
              <Grid item xs={3}>
                <AutoComplete key="arrival" type="Arrival" changeType={props.arrChange} />
              </Grid>
              <Grid item xs={2}>
                <DateField label="Search From" changeType={props.change} name="date_from" />
              </Grid>
              <Grid item xs={2}>
                <DateField label="Search To" changeType={props.change} name="date_to" />
              </Grid>
              <Grid item xs={1} sx={{ textAlign: 'center' }}>
                { 
                  props.buttonLoading ? (<IconButton disabled size="small"><CircularProgress sx={{ fontSize: '1rem', color: 'var(--indigo)' }} /></IconButton>)
                :
                  (<Tooltip title="Search Flights"><IconButton size="large" type="submit" className="indigo-btn"><SearchRounded /></IconButton></Tooltip>)
                }
              </Grid>
        </Grid>
    </>
  )
}

export default FlightSearchContainer;