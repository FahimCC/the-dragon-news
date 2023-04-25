import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
	return (
		<Container className='my-5 border border-2 rounded'>
			<div className='fw-semibold fs-5 px-2 py-3 p-5 d-flex'>
				<Button className='btn-danger me-3 fs-5'>Latest</Button>
				<Marquee pauseOnHover={true}>
					HSC exams may start by mid-August: Dipu Moni. PM gets red carpet
					welcome on arrival in Tokyo. Donald Trump goes on trial, accused of
					rape.
				</Marquee>
			</div>
		</Container>
	);
};

export default LatestNews;
