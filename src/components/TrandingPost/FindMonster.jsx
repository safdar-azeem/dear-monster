import React from 'react'

const FindMonster = () => {
    return (
			<div class='findDearMonster py-6'>
				<div class='px-5'>
					<div class='mt-7 center fw-bold fw-24 bold'>Find Your DearMonster</div>
				</div>
				<div class='ps-8 mt-8'>
					<p class='text-white mb-5'>Star Rating</p>
					<div class='my-4'>
						<div class='form-check'>
							<input
								class='form-check-input p-2'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<label class='form-check-label ms-3' for='flexCheckDefault'>
								<img src='/assets/imgs/Star.png' alt='' className='me-2' />
							</label>
						</div>
					</div>
					<div class='my-4'>
						<div class='form-check'>
							<input
								class='form-check-input p-2'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<label class='form-check-label ms-3' for='flexCheckDefault'>
								<img src='/assets/imgs/Star.png' alt='' className='me-2' />
								<img src='/assets/imgs/Star.png' alt='' />
							</label>
						</div>
					</div>
					<div class='my-4'>
						<div class='form-check'>
							<input
								class='form-check-input p-2'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<label class='form-check-label ms-3' for='flexCheckDefault'>
								<img src='/assets/imgs/Star.png' alt='' className='me-2' />
								<img src='/assets/imgs/Star.png' alt='' className='me-2' />
								<img src='/assets/imgs/Star.png' alt='' />
							</label>
						</div>
					</div>
					<div class='my-4'>
						<div class='form-check'>
							<input
								class='form-check-input p-2'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<label class='form-check-label ms-3' for='flexCheckDefault'>
								<img src='/assets/imgs/Star.png' alt='' className='me-2' />
								<img src='/assets/imgs/Star.png' alt='' className='me-2' />
								<img src='/assets/imgs/Star.png' alt='' className='me-2' />
								<img src='/assets/imgs/Star.png' alt='' />
							</label>
						</div>
					</div>
				</div>
				<section class='ps-8 mt-6 text-white'>
					<p>Level</p>
					<div class='row row-cols-3 w-75 mt-4'>
						<div class='d-flex align-items-center'>
							<input
								class='form-check-input p-2 me-3'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<p class='mt-1'>1</p>
						</div>
						<div class='d-flex align-items-center'>
							<input
								class='form-check-input p-2 me-3'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<p class='mt-1'>2</p>
						</div>
						<div class='d-flex align-items-center'>
							<input
								class='form-check-input p-2 me-3'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<p class='mt-1'>3</p>
						</div>
					</div>
					<div class='row row-cols-3 w-75 mt-4'>
						<div class='d-flex align-items-center'>
							<input
								class='form-check-input p-2 me-3'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<p class='mt-1'>4</p>
						</div>
						<div class='d-flex align-items-center'>
							<input
								class='form-check-input p-2 me-3'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<p class='mt-1'>5</p>
						</div>
						<div class='d-flex align-items-center'>
							<input
								class='form-check-input p-2 me-3'
								type='checkbox'
								value=''
								id='flexCheckDefault'
							/>
							<p class='mt-1'>6</p>
						</div>
					</div>
				</section>
				<footer class='mt-6'>
					<div class='filterCheckBtn  w-140px mx-auto py-3 center bold'>Filter</div>
				</footer>
			</div>
		);
}

export default FindMonster
