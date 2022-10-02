import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside>
        <ul className="side-item">
            <li ><Link to="Overview" className="side-text">Overview</Link></li>
            <li><Link to="MyDebt" className="side-text">MyDebt</Link></li>
            <li><Link to="MyGoal" className="side-text">MyGoal</Link></li>
        </ul>
    </aside>
  )
}

export default Sidebar