import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/book',
		element: <NotFoundPage />,
	},
]

export default routes
