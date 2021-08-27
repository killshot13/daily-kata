import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Navbar = () => {
	const onButtonClickAb = () => {
		window.scrollTo({
			top: 375,
			behavior: 'smooth',
		})
	}

	const onButtonClickSe = () => {
		window.scrollTo({
			top: 800,
			behavior: 'smooth',
		})
	}

	const onButtonClickCo = () => {
		window.scrollTo({
			top: 1250,
			behavior: 'smooth',
		})
	}

	const onButtonClickRe = () => {
		window.scrollTo({
			top: 2120,
			behavior: 'smooth',
		})
	}

	return (
		<div>
			<div className='navbar-area'>
				<nav className='navbar navbar-area navbar-expand-lg'>
					<div className='container nav-container'>
						<div className='responsive-mobile-menu'>
							<button
								className='menu toggle-btn d-block d-lg-none'
								data-toggle='collapse'
								data-target='#ormica_main_menu'
								area-expanded='false'
								area-label='Toggle navigation'>
								<span className='icon-left' />
								<span className='icon-right' />
							</button>
						</div>
						<div className='logo'>
							<Link to='/home'>
								<img src={require('../../img/icons/brand/footer-logo.png')} alt='Company Logo' />
							</Link>
						</div>
						<div className='collapse navbar-collapse' id='ormica_main_menu'>
							<Nav variant='tabs' className='navbar-nav menu-open'>
								<Nav.Item className='menu-item button' onClick={onButtonClickAb}>
									<div className='button__text'>About...</div>

									<div className='button__wrapper'>
										<div className='button__arrow'></div>
										<div className='button__border-circle'></div>
										<div className='button__mask-circle'>
											<div className='button__small-circle'></div>
										</div>
									</div>
								</Nav.Item>
								<Nav.Item className='menu-item button' onClick={onButtonClickSe}>
									<div className='button__text'>Services...</div>

									<div className='button__wrapper'>
										<div className='button__arrow'></div>
										<div className='button__border-circle'></div>
										<div className='button__mask-circle'>
											<div className='button__small-circle'></div>
										</div>
									</div>
								</Nav.Item>
								<Nav.Item className='menu-item button' onClick={onButtonClickCo}>
									<div className='button__text'>Contact...</div>

									<div className='button__wrapper'>
										<div className='button__arrow'></div>
										<div className='button__border-circle'></div>
										<div className='button__mask-circle'>
											<div className='button__small-circle'></div>
										</div>
									</div>
								</Nav.Item>
								<Nav.Item className='menu-item button' onClick={onButtonClickRe}>
									<div className='button__text'>Resources...</div>

									<div className='button__wrapper'>
										<div className='button__arrow'></div>
										<div className='button__border-circle'></div>
										<div className='button__mask-circle'>
											<div className='button__small-circle'></div>
										</div>
									</div>
								</Nav.Item>
							</Nav>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
