import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './index2.css'
import NavBar from './App.jsx'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Main from './component-info/anthony-main.jsx'
import AnFooter from './component-footer/an-footer.jsx'
import InfoSm from './component-info-symbols/info-symbols.jsx'
import BrdNotes from './projects-info/brd-notes.jsx'
import Tacos from './projects-info/brd-notes.jsx'
import App2 from './App-2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        
        <App2 />

    </BrowserRouter>
  </React.StrictMode>,
)
