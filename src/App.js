import { useRoutes } from 'react-router-dom'

import routes from './routes'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
	const content = useRoutes(routes)

	return (
		<div className='App'>
			<Header />
			<main className='mainContent'>
				<div>{content}</div>
			</main>
			<Footer />
		</div>
	)
}

export default App
