import { useState } from 'react'
import {
   BrowserRouter as Router,
   useRoutes
} from 'react-router-dom'

import routes from '~react-pages'
import reactLogo from './assets/react.svg'
import ticketButlerLogo from './assets/ticketbutler.png'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <img src={ticketButlerLogo} className="logo" alt="TicketButler logo" />
      </div >
      <h1>TicketButler</h1>
      <button className="login-button" onClick={() => setCount((count) => count + 1)}>
          Artist Login
      </button>

      <button className="login-button" onClick={() => setCount((count) => count + 1)}>
          Venue Login
      </button>
    </div>
  )
}

export default App
