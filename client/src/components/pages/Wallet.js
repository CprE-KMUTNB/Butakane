import '../css/page.css'
import '../css/wallet.css'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Wallet = () => {
  return (
    <div className="wallet-page">
      <Sidebar />
      <Outlet />

    </div>
  )
}

export default Wallet