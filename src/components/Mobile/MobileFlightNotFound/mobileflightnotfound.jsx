import { Alert, Button, Container, Snackbar, Typography } from "@mui/material";


function MobileFlightNotFound() {
  return (
    <Container maxWidth="sm" sx={{textAlign: 'center', display:{xs:'block',md:'block'}}}>
        <Typography variant="h4" sx={{mt:10}}>⚠️</Typography>
        <Typography variant="h5" sx={{fontWeight:700}}>No Flights Found!</Typography>
        <Typography sx={{mt:2, mb:8}}>Unfortunately no flights were found for the route you entered!</Typography>
        <Button className="indigo-btn" sx={{px:5, display:{xs:'flexbox', md:"none"}, mb:10}} onClick={() => {window.location.href="/flights"}}>Return to Search</Button>
        <Snackbar open={true}>
            <Alert severity="warning" sx={{width:'100%'}}>No Flights were found for this route!</Alert>
        </Snackbar>
    </Container>
  )
}

export default MobileFlightNotFound;