import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import NewsLayouts from '../layouts/NewsLayouts';
import NewsInDetails from '../pages/DetailedNews/NewsInDetails';
import Category from '../pages/Home/Category';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import TermsAndConditions from '../pages/LoginRegister/TermsAndConditions';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
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
]);

export default router;
