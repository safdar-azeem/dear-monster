import React from 'react'
import MinionCard from './MinionCard';

const data = [
	{
		id: '#123212',
		title: 'Monster A',
		img: '/assets/gif/4 Monster characters (1)/1. Monster animated.gif',
		rating: '2',
		totalRating: 3,
		values: {
			Win_Rate: '2/612 Exp',
			Reward_Estimated: 'None',
			Exp_Gain: 'A34500',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Monster B',
		img: '/assets/gif/4 Monster characters (1)/3. Monster animated.gif',
		rating: '2',
		totalRating: 3,
		values: {
			Win_Rate: '2/612 Exp',
			Reward_Estimated: 'None',
			Exp_Gain: 'A34500',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Monster C',
		img: '/assets/gif/4 Monster characters (1)/2. Monster animated.gif',
		rating: '2',
		totalRating: 3,
		values: {
			Win_Rate: '2/612 Exp',
			Reward_Estimated: 'None',
			Exp_Gain: 'A34500',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Monster D',
		img: '/assets/gif/4 Monster characters (1)/4. Monster animated.gif',
		rating: '2',
		totalRating: 3,
		values: {
			Win_Rate: '2/612 Exp',
			Reward_Estimated: 'None',
			Exp_Gain: 'A34500',
		},
		price: '3,000',
	},
];


const ChooseMinion = () => {
    return (
			<div>
				<div className='center'>
					<h5 className='text-white mt-7 sm-fs-29 fs-21'>CHOOSE A MINION</h5>
				</div>
				<div className='container mb-9  mt-5'>
					<div class='w-100 px-2'>
						<section
							className='d-inline-flex justify-content-md-between justify-content-center  w-100'
							style={{ flexWrap: 'wrap' }}
						>
							{data.map((post) => {
								return <MinionCard post={post} className='me-lg-6' />;
							})}
						</section>
					</div>
				</div>
			</div>
		);
}

export default ChooseMinion
