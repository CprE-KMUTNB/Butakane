import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside>
        <ul className="side-item">
            <li className="side-text"><Link to="Overview">Overview</Link></li>
            <li className="side-text"><Link to="MyDept">MyDept</Link></li>
            <li className="side-text"><Link to="MyGoal">MyGoal</Link></li>
        </ul>
    </aside>
  )
}

export default Sidebar