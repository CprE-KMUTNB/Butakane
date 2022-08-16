import { Link } from 'react-router-dom'

const Navigator = () => {
  return (
    <nav>
        <div className="navbar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Wallet'>Wallet</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </div>
    </nav>

  )
}

export default Navigator