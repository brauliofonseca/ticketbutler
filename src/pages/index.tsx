import { Link } from 'react-router-dom'

import ticketButlerLogo from '../assets/ticketbutler.png'
import './styles/EntryPage.css'


const EntryPage = () => {

  return (
    <div className="App">
      <div>
          <img src={ticketButlerLogo} className="logo" alt="TicketButler logo" />
      </div >
      <h1>TicketButler</h1>
      <button className="login-button">
			<Link to={`ArtistHomePage`}>Artist Login</Link>
      </button>

      <button className="login-button">
			<Link to={`VenueHomePage`}>Venue Login</Link>
      </button>
    </div>
  )
}

export default EntryPage
