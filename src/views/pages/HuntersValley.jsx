import React from 'react';
import CurrenPageTitle from '../../components/common/CurrenPageTitle';
import { useSelector } from 'react-redux';
import { connectUserAction } from '../../store/actions/auth/login';
import { useDispatch } from 'react-redux';

const HuntersValley = () => {
	const { userId } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const handleConnect = () => {
		dispatch(connectUserAction());
	};

		const handleChange = (e) => {
			const { value } = e.target;
			if (value < 1) {
				e.target.value = 1;
			}else if (value > 10) {
				e.target.value = 10;
			}
		}
	return (
		<div>
			<CurrenPageTitle title='Hunter’s Valley'></CurrenPageTitle>
			<div className='container center mt-6'>
				<div class='discoveryCaveBg py-2 w-md-lg2 w-md2 mb-8'>
					<div class='center'>
						<img src='/assets/gif/Cave Animated.gif' alt='' class='w-75 mt-7' />
					</div>
					<div class='center fs-19 flex-column text-white'>
						<p class='mt-2 mb-6'>Discovery Cave</p>
						<div class='d-flex justify-content-between w-60 mb-4'>
							<p>Price</p>
							<div class='d-flex align-items-center'>
								<img src='/assets/imgs/coin.png' className='w-30px me-1' />
								<p>48,000</p>
							</div>
						</div>
						<div className='d-flex justify-content-between mb-6 w-60 align-items-center'>
							<p>Select quantity</p>
							<input
								type='number'
								name=''
								className='form-control  w-100px'
								placeholder='1 to 10'
								id=''
								onChange={handleChange}
							/>
						</div>
					</div>
					<footer className='center mt-6 flex align-items-center pb-4 mb-4'>
						{userId ? (
							<div class='header-Connect-btn h-40px center w-100px px-4 fs-16 bold cursor'>
								Purchase
							</div>
						) : (
							<div
								class='header-Connect-btn h-40px center w-100px px-4 fs-16 bold cursor'
								onClick={handleConnect}
							>
								Connect
							</div>
						)}
					</footer>
				</div>
			</div>
		</div>
	);
};

export default HuntersValley;
