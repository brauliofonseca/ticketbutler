import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
   BrowserRouter as Router,
   useRoutes
} from 'react-router-dom'

import './index.css'

import routes from '~react-pages'


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
			 <App />
		</Router>
  </StrictMode>,
)
