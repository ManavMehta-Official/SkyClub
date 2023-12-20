import { Grid, Link, Typography } from "@mui/material";
import { logo } from "../../assets";


function Footer() {
  return (
    <div style={{paddingInline: '2%'}}>
        <section style={{backgroundColor: 'transparent', paddingBlock:'1%', paddingInline:'2%', marginTop: '4%', }}>
            <Grid container sx={{justifyContent:'centet', alignItems: 'center', display:{xs:'none', md:'flex'}, borderTop: '1.2px solid var(--gray2)', pt:2}}>
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{fontWeight:800, fontFamily:'var(--displayFont)'}}><img src={logo} width="4%" />SkyClub India</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{textAlign: 'right'}}>
                        Developed by: <Link sx={{color:'var(--indigo)', '&:hover':{cursor: 'pointer'}}} href="https://github.com/ManavMehta-Official" target="_blank">Manav Mehta</Link>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container sx={{justifyContent:'centet', alignItems: 'center', display:{xs:'flex', md:'none'}}}>
                <Grid item xs={5}>
                    <Typography sx={{fontWeight:800, fontFamily:'var(--displayFont)'}}><img src={logo} width="10%" />SkyClub India</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography sx={{textAlign: 'right', fontSize:'0.8rem'}}>
                        Developed by: <Link sx={{color:'var(--indigo)', '&:hover':{cursor: 'pointer'}}} href="https://github.com/ManavMehta-Official" target="_blank">Manav Mehta</Link>
                    </Typography>
                </Grid>
            </Grid>
        </section>
    </div>
  )
}

export default Footer;