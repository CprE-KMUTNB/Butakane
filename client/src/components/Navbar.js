import { Link } from 'react-router-dom';
import './css/navbar.css';
import LoginButton from './LoginButton';
<<<<<<< HEAD
import RegisterButton from './RegisterButton';
import { FaBars } from "react-icons/fa";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Badge } from '@nextui-org/react'
import { SunIcon } from './Icon/SunIcon';
import { MoonIcon } from './Icon/MoonIcon';
=======
import { FaSun, FaBars } from "react-icons/fa";
>>>>>>> parent of 3393b7c (Home - Switch Mode)

const Navbar = () => {
  return (
    <nav>
        <div className="nav-container">
            
            <div className="navbar">
                
                <Link to="/" className="logo"><span className='logo-buta'>Buta</span>KANE</Link>
                <div className="nav-menu">
                    <ul className="nav-menu-item">
                        <li className="menu-text"><Link to="/">Home</Link></li>
                        <li className="menu-text"><Link to="/Wallet">Wallet</Link></li>
                        <li className="menu-text"><Link to="/Aboutus">About us</Link></li>
                    </ul>
                </div>
                <div className="nav-user">
                    <ul className="nav-user-item">
<<<<<<< HEAD
                        <li className="user-menu mode-toggle"><FaSun className="fontawesome" /></li>
=======
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
>>>>>>> parent of e3f2307 (DarkTheme Beta)
                        <li className="user-menu"><LoginButton /></li>
                        <li className="user-menu"><RegisterButton /></li>
                    </ul>
                </div>

                <Link to="#" className="menu-bar">
                    <FaBars />
                </Link>

            </div>
        </div>
    </nav>
  )
}

export default Navbar