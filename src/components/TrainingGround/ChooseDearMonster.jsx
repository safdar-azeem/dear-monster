import React from 'react'
import PostCard from '../postCard/PostCard';

const data = [
	{
		id: '#123212',
		title: 'Bird',
		img: '/assets/imgs/drogan.png',
		rating: '2',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			ownerId: 'A34500',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Bird',
		img: '/assets/imgs/drogan.png',
		rating: '2',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			ownerId: 'A34500',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Bird',
		img: '/assets/imgs/drogan.png',
		rating: '2',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			ownerId: 'A34500',
		},
		price: '3,000',
	},
];
const ChooseDearMonster = () => {
    return (
			<div>
				<div className='center'>
					<p className='text-white mt-7 fs-29'>CHOOSE A DEARMONSTER</p>
				</div>
				<div className='container mt-9 position-relative'>
					<img src='/assets/imgs/ArrowLeft.png ' className='cursor translate-left-middle ms-3' />
					<img src='/assets/imgs/ArrowRight.png' className='cursor translate-right-middle' />
					<div class='w-85 mx-auto px-4 d-flex justify-content-center align-items-center' style={{flexWrap:'nowrap'}}>
							{data.map((post,i) => {
								return (
									<PostCard
										post={post}
										stepImg='/assets/imgs/droganBord.png'
										className={`mb-9 ${i!==data.length-1&& 'me-8'}`}
									/>
								);
							})}
					</div>
				</div>
			</div>
		);
}

export default ChooseDearMonster
