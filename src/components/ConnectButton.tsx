import {Box, Button, Text} from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { useEthers } from '@usedapp/core'
import Identicon from './Identicon'


const ConnectButton = ({handleOpenModal}) => {
	const { activateBrowserWallet, account } = useEthers()
	
	const handleConnectWallet = async() => {
		if ((window.ethereum || window.web3) && !isMobile) {
			await activateBrowserWallet()
		} else {
			console.log('Launching Metamask Mobile')
		}
	}

	const showButton = () => {
		if (isMobile) {
			return <Button onClick={handleConnectWallet}>Open Metamask</Button>
		}
		return <Button onClick={handleConnectWallet}>Connect Wallet</Button>
	}
	
	return account ? (
		<Box
			width={[175, 175, 200]}
			display="flex"
			alignItems="center"
			background="red.300"
			borderRadius="xl"
			py="0"
		>
			<Button 
				onClick={handleOpenModal}
				bg="red.300"
				border="2px solid transparent"
				_hover={{
				    border: "5px",
				    borderStyle: "solid",
				    borderColor: "blue.400", 
				    backgroundColor: "purple.700"
				}}
				borderRadius="xl"
				m="1px"
				px={1}
				height="38px"
				width={[175, 175, 200]}
			>
				<Text 
					color='white'
					fontSize={['sm', 'sm', 'lg']}
					fontWeight='medium'
					mr='2'
				>
					{account && `${account.slice(0, 6)}...${account.slice(
						account.length-4, account.length)}`}
				</Text>
			</Button>
		</Box>
	) : (
		showButton() 
	)
}

export default ConnectButton
