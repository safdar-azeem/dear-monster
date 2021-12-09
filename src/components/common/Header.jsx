import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { NavbarRoutes } from '../../routes/';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { connectUserAction, connectUserSuccess } from '../../store/actions/auth/login';
import Web3 from 'web3';
const Header = () => {
	const [active, setActive] = useState(false);
	const [blance, setBlance] = useState(0);

	const dispatch = useDispatch();
	const { userId } = useSelector((state) => state.auth);
	
	const handleConnect = () => {
		dispatch(connectUserAction());
	};

	useEffect(async () => {
		if (window.ethereum) {
			window.ethereum.request({ method: 'eth_accounts' }).then((res) => {
				dispatch(connectUserSuccess(res[0]));
				
			});
		}
	}, []);

	useEffect(async () => {
		if (window.ethereum) {
			if (userId) {
				const web3 = new Web3(window.ethereum);
				const balance = await web3.eth.getBalance(userId);
				setBlance(web3.utils.fromWei(balance, 'ether'));
			}
		}
	}, [userId]);



	
	return (
		<section>
			<section className='container d-flex py-4 justify-content-between  align-items-center'>
				<Link to='/'>
					<img src='/assets/imgs/header/logo.png' alt='' className='w-90px' />
				</Link>
				<button className='btn d-lg-none d-flex' onClick={() => setActive(true)}>
					<img src='/assets/imgs/Hamburger.png' className='w-35px' alt='' />
				</button>
				<div
					className={`${
						active
							? 'position-fixed bg-dark top-0 w-100 w-100 start-0 vh-lg-auto vh-100'
							: 'd-none d-lg-flex align-items-center '
					} `}
					style={{ zIndex: '9999' }}
				>
					<button
						className={`${active && 'd-flex-imp'} d-none btn m-3 me-2`}
						onClick={() => setActive(false)}
					>
						<img src='/assets/imgs/cancel.png' className='w-35px' alt='' />
					</button>
					<div
						className={`${
							active && 'show-navbar flex-lg-column mt-lg-8'
						} w-lg-auto d-lg-flex d-none flex-lg-row flex-column w-100 mt-8 mt-lg-5 justify-content-between align-items-center`}
					>
						{NavbarRoutes.map((route) => {
							return (
								<Link
									to={route.pathForNavabr}
									class={`header-btn text-warning ${!active && 'me-4'} w-auto mb-5`}
									onClick={() => setActive(false)}
								>
									<span className='mx-2'>{route.title}</span>
								</Link>
							);
						})}
					</div>
				</div>

				<div className='d-lg-flex d-none justify-content-between align-items-center'>
					<img src='/assets/imgs/coin.png' className='w-50px' />
					{userId && (
						<div class='dms-block w-159px h-40px ms-4 center px-2'>
							<div className='dms-btn w-100 me-2  center'>{blance}</div>
							<div className='dms-btn w-100  center'>DMS</div>
						</div>
					)}
					{!userId && (
						<div
							class={`${
								userId ? 'w-25' : 'px-5'
							} header-Connect-btn h-40px ms-4 center bold cursor`}
							onClick={handleConnect}
						>
							Connect
						</div>
					)}
					{userId && (
						<div>
							<div class='dropdown ms-4'>
								<button
									class='btn  w-105px h-35px rounded-3 text-white border border-warning center'
									type='button'
									id='dropdownMenuButton1'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									{userId && `${userId.substring(0, 4)} ${userId.slice(-4)}`}
								</button>
								<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
									<li>
										<a class='dropdown-item py-7px' href='#'>
											Cart
										</a>
									</li>
									<li>
										<a class='dropdown-item py-7px' href='#'>
											Transaction History
										</a>
									</li>
									<li>
										<p class='dropdown-item py-7px' href='#'>
											Disconnect
										</p>
									</li>
								</ul>
							</div>
							<div class='mt-2'>
								<button class='btn border position-absolute  center w-100px px-1 fs-12   mx-4  text-white cursor'>
									BUY DMS
								</button>
							</div>
						</div>
					)}
				</div>
			</section>
			<section>
				<div class='announcementBar  mt-3 h-30px py-2 fw-bold fs-17'>
					<div id='rssBlock '>
						<p class='cnnContents overflow-x-auto'>
							<span class='marqueeStyle  '>
								Announcement: Player A revealed a monster in the cave!{' '}
							</span>
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Header
