import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';

import Overview from './pages/Wallets/Overview';
import MyGoal from './pages/Wallets/MyGoal';
import MyDept from './pages/Wallets/MyDept';

import { AnimatePresence } from "framer-motion"


const NavRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Wallet" element={<Wallet/>} >
            <Route path="/Wallet" element={<Navigate to="Overview" />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="MyDept" element={<MyDept />} />
            <Route path="MyGoal" element={<MyGoal />} />
            </Route>
          <Route path="Aboutus" element={<AboutUs/>} />
          <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default NavRouter