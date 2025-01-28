import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import "./scss/global.scss"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Home />
  </StrictMode>,
)
