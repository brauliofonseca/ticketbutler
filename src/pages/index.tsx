import { Link } from 'react-router-dom'
import { Box, Button, Flex, Heading, Image, Spacer } from '@chakra-ui/react'

import ticketButlerLogo from '../assets/ticketbutler.png'
import './styles/EntryPage.css'


const EntryPage = () => {

	return (
		<Flex alignItems='center' direction='column' gap='5' >
			<Image className='logo' src={ticketButlerLogo} alt='TicketButler logo'/>
			<Spacer />
			<Button className='login-button'>
				<Link to={`ArtistHomePage`}>Artist Login</Link>
			</Button>
			<Button className='login-button'>
				<Link to={`VenueHomePage`}>Venue Login</Link>
			</Button>
		</Flex>
	)
}

export default EntryPage
