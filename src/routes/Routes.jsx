import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '../layouts/Main';
import NewsLayouts from '../layouts/NewsLayouts';
import SecondaryLayouts from '../layouts/SecondaryLayouts';
import NewsInDetails from '../pages/DetailedNews/NewsInDetails';
import Category from '../pages/Home/Category';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import TermsAndConditions from '../pages/LoginRegister/TermsAndConditions';
import About from '../pages/Shared/About';
import Career from '../pages/Shared/Career';
import ErrorPage from '../pages/Shared/ErrorPage';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SecondaryLayouts></SecondaryLayouts>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Navigate to='/category/0' />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/career',
				element: <Career />,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/terms',
				element: <TermsAndConditions></TermsAndConditions>,
			},
		],
	},
	{
		path: '/category',
		element: <Main></Main>,
		children: [
			{
				path: '/category/0',
				element: <Home></Home>,
			},
			{
				path: ':id',
				element: <Category></Category>,
			},
		],
	},
	{
		path: '/news',
		element: <NewsLayouts></NewsLayouts>,
		children: [
			{
				path: ':id',
				element: (
					<PrivateRoutes>
						<NewsInDetails></NewsInDetails>
					</PrivateRoutes>
				),
			},
		],
	},
]);

export default router;
