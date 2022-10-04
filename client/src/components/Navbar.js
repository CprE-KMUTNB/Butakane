import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react'
import './css/navbar.css';
import LoginButton from './LoginButton';
import RegButton from './RegButton'
import { FaBars } from "react-icons/fa";
import { clearLocal, clearSession, isLoggedIn, getUser } from '../services/authorize';

const Navbar = () => {

    const navigate = useNavigate()

    let LinkActive = {
        color: "#2D86FF"
      };
    const logOut = () =>{
        clearLocal()
        clearSession()
        navigate('/')
    }


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
                        {
                            !isLoggedIn() && (
                                <li className="user-menu"><LoginButton /></li>   
                            )
                        }
                        {
                            !isLoggedIn() && (
                                <li className="user-menu"><RegButton /></li>
                            )
                        }
                        {
                            isLoggedIn() && (
                                <li className="user-menu">
                                    <h3>{getUser}</h3>
                                </li>
                            )
                        }
                        {
                            isLoggedIn() && (
                                <li className="user-menu">
                                    <Button shadow color="error" auto onClick={logOut}>ลงชื่อออก</Button>
                                </li>
                            )
                        }
                        
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