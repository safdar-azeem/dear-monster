import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { NavbarRoutes } from '../../routes/';
const Header = () => {
	const [active,setActive]=useState(false)
	console.log('active :>> ', active);
    return (
			<section>
				<section className='container d-flex py-4 justify-content-between  align-items-center'>
					<div>
						<img src='/assets/imgs/header/logo.png' alt='' className='w-90px' />
					</div>
					<button className='btn d-lg-none d-flex' onClick={() => setActive(true)}>
						<img src='/assets/imgs/Hamburger.png' className='w-35px' alt='' />
					</button>
					<div
						className={`${
							active
								? 'position-fixed bg-dark top-0 w-100 w-lg-auto start-0 vh-lg-auto vh-100'
								: 'd-none d-lg-flex align-items-center '
						} `}
					>
						<button
							className={`${active && 'd-flex-imp'} d-none btn m-3`}
							onClick={() => setActive(false)}
						>
							<img src='/assets/imgs/cancel.png' className='w-35px' alt='' />
						</button>
						<div
							className={`${
								active && 'show-navbar flex-lg-column mt-lg-8'
							} w-lg-auto d-lg-flex d-none flex-lg-row flex-column w-100 mt-8 mt-lg-5 justify-content-between align-items-center`}
						>
						{
							NavbarRoutes.map(route=>{
								return (
									<Link
										to={route.path}
										class={`header-btn text-warning ${!active && 'me-4'} w-auto mb-5`}
										onClick={() => setActive(false)}
									>
										<span className='mx-2'>{route.title}</span>
									</Link>
								);
							})
						}
						</div>
					</div>
					<div className='d-lg-flex	 d-none justify-content-between align-items-center'>
						<img src='/assets/imgs/header/logo.png' className='w-50px' />
						<div class='dms-block w-md h-40px ms-4 center px-2'>
							<div className='dms-btn w-100 me-2  center'>10000</div>
							<div className='dms-btn w-100  center'>Dms</div>
						</div>
						<div class='header-Connect-btn h-40px ms-4 w-25 center'>Connect</div>
					</div>
				</section>
				<section>
					<div class='announcementBar mt-3 h-30px center py-2 fw-bold fs-17'>
						<small>Announcement: Player A revealed a monster in the cave!</small>
					</div>
				</section>
				<section class='headingBox mt-6 center w-190px mx-auto h-70px'>Trading Post</section>
			</section>
		);
}

export default Header
