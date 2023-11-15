
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import './NavStyle.css';

function NavBar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
          
        </Typography>
        <ul className="menu">
          
          <li><NavLink to='/' className={"menu-item"}>Home</NavLink></li>
          <li><NavLink to='Login' className={"menu-item"}>Login</NavLink></li>
          <li><NavLink to='Bitcoin-Rates' className={"menu-item"}>Bitcoin Rates</NavLink></li>
        </ul>
     
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;