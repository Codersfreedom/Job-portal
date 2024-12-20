import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme.js';
import App from './App.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </HashRouter>
  </StrictMode>,
)
