import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import Navbar from './components/Navbar';
import AnimatedRouter from './components/AnimatedRouter'



const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {background: '#fff',
    text: '#000',
<<<<<<< HEAD
    link: '#000'}
=======
    link: '#000',}
>>>>>>> parent of e3f2307 (DarkTheme Beta)
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {background: '#18191A',
    text: '#fff',
<<<<<<< HEAD
    link: '#fff'}
=======
    link: '#fff',}
>>>>>>> parent of e3f2307 (DarkTheme Beta)
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
        
        <AnimatedRouter />

      </Router>
    </NextUIProvider>
  </NextThemesProvider>

  );
}

export default App;
