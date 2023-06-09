import React from 'react';
import { Outlet } from 'react-router-dom';
import LatestNews from '../pages/Home/LatestNews';
import Header from '../pages/Shared/Header';
import NavigationBar from '../pages/Shared/NavigationBar';

const Main = () => {
	return (
		<div>
			<Header />
			<LatestNews />
			<NavigationBar />
			<Outlet />
		</div>
	);
};

export default Main;
