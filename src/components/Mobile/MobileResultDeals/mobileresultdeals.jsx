/* eslint-disable react/prop-types */

import { Grid, Typography } from "@mui/material";

function MobileResultDeals(props) {
  return (
    <>
        <section style={{ color: 'var(--dark)', padding: '4%' }}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{ fontWeight: '700' }}>Search Results</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ color: 'var(--gray2)', fontSize: '0.8rem', textAlign: 'right' }}>&quot;{props.flight.length} Results&quot;</Typography>
                </Grid>
            </Grid>
        </section>
    </>
  )
}

export default MobileResultDeals;