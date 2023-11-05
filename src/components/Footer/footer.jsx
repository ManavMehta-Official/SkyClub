import logo from '../../images/logo.svg';
import {Grid} from '@mui/material'

/* -------------------------------------------------------------------------- */
/*                        FOOTER SECTION OF THE WEBSITE                       */
/* -------------------------------------------------------------------------- */

export default function Footer () {
    return (
        <section style={{ marginInline: '2%', marginTop: "5%" }}>
            <hr style={{ color: "gainsboro" }}></hr>
            <Grid container justify="flex-end" alignItems="center">
                {/* ----------------------------- SKY CLUB INDIA ----------------------------- */}
                <Grid item xs={4}>
                    <h1 style={{ fontFamily: "var(--displayFont)", fontWeight: "900" }}><img src={logo} alt="sky club india logo" style={{ width: "6%" }}></img>SkyClub India</h1>
                </Grid>
                {/* ---------------------------- FOOTER NAVIGATION --------------------------- */}
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <span className="text-muted"><a href="/#/contact" className="footer-link text-muted">Contact</a> &nbsp; | &nbsp; <a href="/#/support" className="footer-link text-muted">Support Project</a> &nbsp; | &nbsp; <a href="/#/info" className="footer-link text-muted">Info</a></span>
                </Grid>
                {/* ---------------------------- DEVELOPER CREDIT ---------------------------- */}
                <Grid item xs={4}>
                    <p className='text-muted' style={{ textAlign: "right" }}>Software as a service by <a href="https://github.com/ManavMehta-Official" className='text-muted' style={{ textDecoration: "none", borderBottom: '1px solid' }} target="_blank" rel="noreferrer">Manav Mehta</a></p>
                </Grid>
            </Grid>
        </section>
    )
}