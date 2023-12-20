/* eslint-disable react/prop-types */

import { Button, Grid } from "@mui/material";
import AutoComplete from "../../SearchFields/AutoComplete/autocomplete";
import DateField from "../../SearchFields/DateField/datefield";
import MobileModalLoader from "../MobileModalLoader/mobilemodalloader";
import { useState } from "react";

function MobileSearchContainer(props) {
  let depChange =  props.depChange;
  let arrChange = props.arrChange;
  let handleChange = props.handleChange;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
        <AutoComplete type="Departure" changeType={depChange} />
        <br />
        <AutoComplete type="Arrival" changeType={arrChange} />
        <br />

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <DateField label="Search From" changeType={handleChange} name="date_from" />
            </Grid>
            <Grid item xs={6}>
                <DateField label="Search To" changeType={handleChange} name="date_to" />
            </Grid>
        </Grid>
        <br />
        <Button type="submit" className="indigo-btn" size="large" onClick={handleOpen} fullWidth>Search Flights</Button>
        <MobileModalLoader open={open} close={handleClose}/>
    </>
  )
}

export default MobileSearchContainer;