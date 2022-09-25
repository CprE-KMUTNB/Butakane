import { NavLink, Link } from 'react-router-dom';
import './css/navbar.css';
import LoginButton from './LoginButton';
import { FaBars } from "react-icons/fa";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Badge } from '@nextui-org/react'
import { SunIcon } from './Icon/SunIcon';
import { MoonIcon } from './Icon/MoonIcon';

const Navbar = () => {
    
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();
    let LinkActive = {
        color: "#2D86FF"
      };

      
  return (
    <nav>
        <div className="nav-container">
            
            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/" className="logo"><span className='logo-buta'>Buta</span>KANE</Link>
                    <Badge enableShadow disableOutline color="error">
                        BETA
                    </Badge>
                </div>
                
                <div className="nav-menu">
                    <ul className="nav-menu-item">
                        <li className="menu-text">
                            <NavLink to="/" style={({ isActive }) => isActive ? LinkActive : undefined} >Home</NavLink>
                        </li>
                        <li className="menu-text">
                            <NavLink to="/Wallet" style={({ isActive }) => isActive ? LinkActive : undefined}>Wallet</NavLink>
                        </li>
                        <li className="menu-text">
                            <NavLink to="/Aboutus" style={({ isActive }) => isActive ? LinkActive : undefined}>About us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-user">
                    <ul className="nav-user-item">
                        <li className="user-menu">
                            <Switch
                                // disabled
                                size="lg"
                                checked={isDark}
                                iconOn={<SunIcon filled />}
                                iconOff={<MoonIcon filled />}
                                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                            /></li>
                        {/* <li className="user-menu mode-toggle"><FaSun className="fontawesome" /></li> */}
                        <li className="user-menu"><LoginButton /></li>
                    </ul>
                </div>

                <NavLink to="#" className="menu-bar">
                    <FaBars />
                </NavLink>

            </div>
        </div>
    </nav>
  )
}

export default Navbar