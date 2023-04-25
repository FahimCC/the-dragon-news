import moment from 'moment';
import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
	return (
		<div className='my-4 text-center'>
			<img src={logo} alt='' />
			<p className='my-2 text-secondary fs-5'>
				Journalism Without Fear or Favour
			</p>
			<h5 className='fw-medium'>
				<span className='text-black'>{moment().format('dddd,')}</span>
				<span className='text-secondary'>
					{moment().format(' MMMM D, YYYY')}
				</span>
			</h5>
		</div>
	);
};

export default Header;
