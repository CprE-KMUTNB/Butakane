import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import Wallet from './components/pages/Wallet';
import AboutUs from './components/pages/AboutUs';
import ErrorPage from './components/pages/ErrorPage';


const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {background: '#fff',
    text: '#000',
    link: '#000'}
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {background: '#10253E',
    text: '#fff',
    link: '#fff'}
  }
})

function App() {
  
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >
    <NextUIProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </NextUIProvider>
  </NextThemesProvider>

  );
}

export default App;
