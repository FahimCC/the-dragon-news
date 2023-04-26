import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
	return (
		<Container className='position-relative'>
			<Navbar collapseOnSelect expand='lg'>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mx-auto'>
						<Link
							to='/category/0'
							className='me-4 text-secondary text-decoration-none'
						>
							Home
						</Link>
						<Link
							to='/about'
							className='me-4 text-secondary text-decoration-none'
						>
							About
						</Link>
						<Link to='/career' className='text-secondary text-decoration-none'>
							Career
						</Link>
					</Nav>
					<Nav className='d-flex justify-content-end align-items-center position-absolute top-5 end-0 '>
						<Link
							to='/login'
							className='rounded text-secondary text-decoration-none bg-secondary text-white  fw-semibold px-5 py-2'
						>
							Login
						</Link>
						<Dropdown>
							<Dropdown.Toggle variant='transparent' id='dropdown-basic'>
								<FaUserCircle className='fs-3' />
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='#/action-2'>Profile</Dropdown.Item>
								<Dropdown.Item href='#/action-3'>Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
