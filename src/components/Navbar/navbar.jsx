import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button  from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import logo from '../../images/logo.svg';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
    


  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="navbar">
          <Toolbar>
            <img src={logo} alt="sky club india logo" className='logo' />
            <a className="nav-brand" href="/SkyClub">
              SkyClub India
            </a>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'right' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
              <MenuItem onClick={handleCloseNavMenu} >
                <Button onClick={() => {window.location.href="/SkyClub"}} textAlign="center" className='mobile-nav'><HomeRoundedIcon style={{ fontSize:"1.2rem", color: "#4361ee" }} /> &nbsp;Home</Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button onClick={() => {window.location.href="/SkyClub/#/flights"}} textAlign="center" className='mobile-nav'><AirplanemodeActiveRoundedIcon style={{ fontSize:"1.2rem", color: "#4361ee" }} /> &nbsp;Flights</Button>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='nav-items'>
              <Button className='nav-item' id='flights-btn' onClick={() => {window.location.href="/SkyClub/#/flights"}}>
                Flights
              </Button>
          </Box>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
      </Container>
    </React.Fragment>
    
  );
}
