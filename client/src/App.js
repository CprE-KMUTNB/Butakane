import { Routes, Route } from 'react-router-dom'

import Navigator from "./components/Navigator";

import Home from './components/pages/Home';
import Wallet from './components/pages/Wallet';
import Aboout from './components/pages/Aboout';

function App() {
  return (
    <>

    <Navigator />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/About" element={<Aboout />} />
    </Routes>

    </>
  );
}

export default App;
