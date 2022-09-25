import { NavLink } from "react-router-dom"
import { FaGlobe, FaCoins, FaTrophy } from "react-icons/fa";

const Sidebar = () => {
    let LinkActive = {
      background: "#3A3B3C",
    }; 
  return (
    <aside>
        <ul className="side-item">
            <li><NavLink to="Overview" className="side-text" style={({ isActive }) => isActive ? LinkActive : undefined}><FaGlobe className="FontIcon" /><span>Overview</span></NavLink></li>
            <li><NavLink to="MyDebt" className="side-text" style={({ isActive }) => isActive ? LinkActive : undefined}><FaCoins className="FontIcon" /><span>MyDebt</span></NavLink></li>
            <li><NavLink to="MyGoal" className="side-text" style={({ isActive }) => isActive ? LinkActive : undefined}><FaTrophy className="FontIcon" /><span>MyGoal</span></NavLink></li>
        </ul>
    </aside>
  )
}

export default Sidebar