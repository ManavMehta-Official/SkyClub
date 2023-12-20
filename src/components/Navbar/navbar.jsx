import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { logo } from '../../assets';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import './navbar.css';
import { Alert, Link, Snackbar, Tooltip } from '@mui/material';

const pages = ['flights', 'info', 'github', 'support'];

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [notification, setNotification] = React.useState(false);
  const [errNotif, setErrNotif] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('manavmehta.official@gmail.com')
    .then(() => {setNotification(true)})
    .catch(() => {setErrNotif(true)});
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification(false);
    setErrNotif(false);
  }

  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: "var(--dark)", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} style={{ width: '2%' }} className="xs-none md-flex" alt="SkyClub India Logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'var(--displayFont)',
              display: { xs: 'none', md: 'flex' },
              fontWeight: 900,
              color: 'var(--text)',
              textDecoration: 'none',
            }}
          >
            SkyClub India
          </Typography>

          <img src={logo} alt="SkyClub India logo" className='xs-flex md-none' style={{ width: '6%' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'var(--displayFont)',
              fontWeight: 900,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SkyClub India
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

                <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/flights" className="mobile-menu-link"><IconButton><AirplanemodeActiveRoundedIcon sx={{fontSize:'1.2rem', color:'var(--indigo)'}} /></IconButton>Flights</Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/info" className="mobile-menu-link"><IconButton><InfoRoundedIcon sx={{fontSize:'1.2rem', color:'var(--indigo)'}} /></IconButton>Version</Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/support" className="mobile-menu-link"><IconButton><FavoriteRoundedIcon sx={{fontSize:'1.2rem', color:'#FF5CCD'}} /></IconButton>Support</Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Button onClick={copyEmail} className="mobile-menu-link indigo-btn" size="small" sx={{px:2}} fullWidth>Contact us</Button>
                </MenuItem>


            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (page === 'github') {
                    window.location.href=`https://github.com/ManavMehta-Official/SkyClub`
                  } else {
                    window.location.href=`/${page}`
                  }
                }}
                className="nav-link"
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize', marginInline: '1%' }}
              >
                {toTitleCase(page)}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: {xs: 'none', md: 'flex'} }}>
            <Tooltip title="Copy Email">
              <Button onClick={copyEmail} className='contact-btn' size="small" sx={{ textTransform: 'none', ml:1, pl: 2, pr: 2 }}>Contact us</Button> 
            </Tooltip>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>

    <Snackbar open={notification} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Email copied successfully!
      </Alert>
    </Snackbar>

    <Snackbar open={errNotif} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Couldn&apos;t Copy Email!
      </Alert>
    </Snackbar>
    </>
  );
}
export default ResponsiveAppBar;