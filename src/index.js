import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/Globals.css"
import "./styles/Navbar.css"
import "./styles/Footer.css"
import "./styles/Cookie.css"
import "./styles/Home.css"
import "./styles/Contact.css"
import "./styles/Company.css"
import "./styles/Investors.css"
import "./styles/Products.css"
import './i18n'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)