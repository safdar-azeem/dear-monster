import React from 'react'
import MinionCard from './MinionCard';

const data = [
	{
		id: '#123212',
		title: 'Monster A',
		img: '/assets/imgs/MINION.png',
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
		img: '/assets/imgs/MINION2.png',
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
		img: '/assets/imgs/MINION3.png',
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
		img: '/assets/imgs/MINION4.png',
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
					<h5 className='text-white mt-7 fs-29'>CHOOSE A MINION</h5>
				</div>
				<div className='container mt-4 mb-9 '>
					<div class='w-100 px-2'>
						<section className='row row-cols-lg-4 row-cols-md-3   gx-8 mt-9 '>
							{data.map((post) => {
								return <MinionCard post={post} />;
							})}
						</section>
					</div>
				</div>
			</div>
		);
}

export default ChooseMinion
