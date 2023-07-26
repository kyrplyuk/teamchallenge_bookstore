import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]

export default routes
