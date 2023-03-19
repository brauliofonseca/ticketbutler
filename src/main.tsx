import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
   BrowserRouter as Router,
   useRoutes
} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider, Config, Goerli, Localhost } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import routes from '~react-pages'


const config: Config = {
	readOnlyChainId: Localhost.chainId,
	readOnlyUrls: {
		[Localhost.chainId]: 'http://127.0.0.1:8545'
	}
}

const App = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			{useRoutes(routes)}
		</Suspense>
	)
}

const app = createRoot(document.getElementById('root') as HTMLElement)

app.render(
	<StrictMode>
		<Router>
			<ChakraProvider>
				<DAppProvider config={config} >
					<App />
				</DAppProvider>
			</ChakraProvider>
		</Router>
	</StrictMode>,
)
