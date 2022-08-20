import { Link } from 'react-router-dom';
import './css/navbar.css';
import LoginButton from './LoginButton';
import { FaSun, FaBars } from "react-icons/fa";

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
                        <li className="user-menu mode-toggle"><FaSun className="fontawesome" /></li>
                        <li className="user-menu"><LoginButton /></li>
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