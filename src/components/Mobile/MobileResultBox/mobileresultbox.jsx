/* eslint-disable react/prop-types */

import { Grid, IconButton, Typography } from "@mui/material";
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';

function MobileResultBox(props) {

  let departure = props.flight[0]['cityFrom'];
  let arrival = props.flight[0]['cityTo'];


  return (
    <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', textAlign:'center', backgroundColor: 'var(--gray2)', borderRadius: '0.5em', pt:2, pb:2, pr:0 }}>
              <Grid item xs={10} sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h6" sx={{textAlign: 'center'}}>{departure} <IconButton disabled size="small"><CompareArrowsRoundedIcon sx={{color: 'var(--text)', justifyContent: 'center', alignItems: 'center'}} /></IconButton> {arrival}</Typography>
                </Grid>
              <Grid item xs={2} sx={{textAlign: 'left'}}><IconButton size="small" onClick={() => {props.loadStatus(false)}} sx={{ backgroundColor: 'gray' }}><EditCalendarRoundedIcon sx={{ color: 'var(--text)' }} /></IconButton></Grid> 
            </Grid>

    </>
  )
}

export default MobileResultBox;