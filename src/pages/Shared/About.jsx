import React from 'react';
import { Spinner } from 'react-bootstrap';

const About = () => {
	return (
		<div className='d-flex justify-content-center mt-5 pt-5'>
			<p className='fs-1'>
				C
				<Spinner animation='grow' variant='primary' />
				<Spinner animation='grow' variant='secondary' />
				ming S
				<Spinner animation='grow' variant='primary' />
				<Spinner animation='grow' variant='secondary' />n
			</p>
		</div>
	);
};

export default About;
