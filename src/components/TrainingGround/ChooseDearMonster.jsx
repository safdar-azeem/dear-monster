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
					<p className='text-white mt-9 sm-fs-29 fs-21 whiteSpace-nowrap'>
						CHOOSE A DEARMONSTER
					</p>
				</div>
				<div className='container mt-9 position-relative'>
					<img
						src='/assets/imgs/ArrowLeft.png '
						className='d-md-flex d-none cursor translate-left-middle ms-3'
					/>
					<img
						src='/assets/imgs/ArrowRight.png'
						className='d-md-flex d-none cursor translate-right-middle'
					/>
					<div
						class='w-85 mx-auto  px-4 overflow-auto d-flex justify-content-center align-items-center'
						style={{ flexWrap: 'nowrap' }}
					>
						{data.map((post, i) => {
							return (
								<PostCard
									post={post}
									stepImg='/assets/imgs/droganBord.png'
									className={`mb-9 ${i !== data.length - 1 && 'me-8'}`}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
}

export default ChooseDearMonster
