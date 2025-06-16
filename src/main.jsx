import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Principal from './Contenido.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contenido from './Contenido.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Contenido></Contenido> 
  </BrowserRouter>,
)