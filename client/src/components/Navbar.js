import { Link, NavLink } from 'react-router-dom';
import './css/navbar.css';
import LoginButton from './LoginButton';
import RegButton from './RegButton'
import { FaSun, FaBars } from "react-icons/fa";

const Navbar = () => {

    let LinkActive = {
        color: "#2D86FF"
      };

  return (
    <nav>
        <div className="nav-container">
            
            <div className="navbar">
                
                <Link to="/" className="logo"><span className='logo-buta'>Buta</span>KANE</Link>
                <div className="nav-menu">
                    <ul className="nav-menu-item">
                        <li className="menu-text">
                            <NavLink to="/" style={({ isActive }) => isActive ? LinkActive : undefined} >Home</NavLink></li>
                        <li className="menu-text">
                            <NavLink to="/Wallet" style={({ isActive }) => isActive ? LinkActive : undefined} >Wallet</NavLink></li>
                        <li className="menu-text">
                            <NavLink to="/Aboutus" style={({ isActive }) => isActive ? LinkActive : undefined}>About us</NavLink></li>
                    </ul>
                </div>
                <div className="nav-user">
                    <ul className="nav-user-item">
                        {/* <li className="user-menu mode-toggle"><FaSun className="fontawesome" /></li> */}
                        <li className="user-menu"><LoginButton /></li>
                        <li className="user-menu"><RegButton /></li>
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