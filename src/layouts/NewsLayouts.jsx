import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import NavigationBar from '../pages/Shared/NavigationBar';

const NewsLayouts = () => {
	return (
		<div>
			<Header />
			<NavigationBar />
			<Outlet />
		</div>
	);
};

export default NewsLayouts;
