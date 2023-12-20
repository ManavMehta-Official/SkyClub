import { Alert, Button, Container, Snackbar, Typography } from "@mui/material";
import qr from '../assets/qr.png';
import { useState } from "react";
import { openInNewTab, tabTitle } from "../functions";


function Support() {

  tabTitle('Support | SkyClub India')

  const [notification, setNotification] = useState(false);
  const [errNotif, setErrNotif] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification(false);
    setErrNotif(false);
  }

  const copyWebLink = () => {
    navigator.clipboard.writeText('https://skyclubindia.netlify.app')
    .then(() => {setNotification(true)})
    .catch(() => {setErrNotif(true)});
  }

  return (
    <>
      <Container maxWidth="sm" sx={{mt:5}}>
        <div className='cloud-bg' style={{borderRadius:'0.4em', paddingInline:'10%', paddingBlock:'5%'}}>
          <div style={{backgroundColor:'var(--text)', borderRadius: '0.2em', color:'var(--dark)', paddingInline:'5%', paddingBlock:'5%'}}>
            <div style={{textAlign:'center',marginTop:'2%'}}>
              <img src={qr} alt="Google Pay QR Code" width="50%" />
              <Typography variant="h4" className="fw-700" sx={{mt:2}}>Support the Project</Typography>
              <Typography>Your contribution towards this project helps us a lot!</Typography>
              <Typography sx={{mt:5}}>You can also help us by sharing this website, So that more people can use our product. Or by contributing to our open source repository.</Typography>
              <Button onClick={() => {openInNewTab('https://github.com/ManavMehta-Official/SkyClub')}} className='indigo-btn-outline' fullWidth sx={{mt:5}}>Contribute to Repository</Button>
              <Button className='indigo-btn' onClick={copyWebLink} fullWidth sx={{mt:2}}>Share Website</Button>
            </div>
          </div>
        </div>
      </Container>

      <Snackbar open={notification} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Website Link copied successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={errNotif} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Couldn&apos;t Copy Email!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Support;