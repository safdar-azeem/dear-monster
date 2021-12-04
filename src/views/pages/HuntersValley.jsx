import React from 'react'
import CurrenPageTitle from "../../components/common/CurrenPageTitle"
const HuntersValley = () => {
    return (
			<div>
				<CurrenPageTitle title='Hunter’s Valley'></CurrenPageTitle>
				<div className='container center mt-6'>
					<div class='discoveryCaveBg py-2 w-md-lg2 w-md2 mb-8'>
						<div class='center'>
							<img src='/assets/imgs/cave.png' alt='' class='w-60 mt-7' />
						</div>
						<div class='center fs-18 flex-column text-white'>
							<p class='mt-2 mb-6'>Discovery Cave</p>
							<div class='d-flex justify-content-between w-50 mb-4'>
								<p>Price</p>
								<p>48,000</p>
							</div>
							<div class='d-flex justify-content-between w-50 mb-4'>
								<p>Available</p>
								<p>21,355</p>
							</div>
							<div class='d-flex justify-content-between w-50 mb-4'>
								<p>Remaining</p>
								<p>26,355</p>
							</div>
						</div>
						<footer className='center mt-6 flex-column pb-4'>
							<div class='header-Connect-btn h-40px center w-100px px-2'>Connect</div>
							<button class='btn border h-40px center w-100px px-2 mt-5 text-white'>
								BUY DMS
							</button>
						</footer>
					</div>
				</div>
			</div>
		);
}

export default HuntersValley
