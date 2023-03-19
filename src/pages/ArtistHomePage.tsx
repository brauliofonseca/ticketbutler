import { Box, useDisclosure } from '@chakra-ui/react'
import ConnectButton from "../components/ConnectButton"
import AccountModal from "../components/AccountModal"


const ArtistHomePage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<div>
			<p>
				Artist Login Page
				<ConnectButton handleOpenModal={onOpen} />
				<AccountModal isOpen={isOpen} onClose={onClose} />
			</p>
		</div>
	)
}

export default ArtistHomePage
