import React, { useEffect } from 'react';
import CurrenPageTitle from '../../components/common/CurrenPageTitle';
import NavLinks from '../../components/Inventory/NavLinks';
import PostCard from '../../components/Inventory/PostCard';
const data = [
	{
		id: '#123212',
		title: 'Bird',
		img: '/assets/imgs/animale2.png',
		status: 'trading',
		rating: '2',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			offchainExp: '',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Bird',
		img: '/assets/imgs/animale2.png',
		status: 'trading',
		rating: '2',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			offchainExp: '',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Bird',
		img: '/assets/imgs/drogan.png',
		status: 'available',
		rating: '2',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			offchainExp: '',
		},
		price: '3,000',
	},
	{
		id: '#123212',
		title: 'Bird',
		img: '/assets/imgs/drogan.png',
		status: 'available',
		rating: '2',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			offchainExp: '',
		},
		price: '3,000',
	},
];
const Inventory = ({ match }) => {
	const [posts, setPosts] = React.useState([]);
	useEffect(() => {
		const filterData = [...data].filter((post) => {
			if (post.status === match.params.slug) {
				return post;
			} else if (match.params.slug === 'all') {
				return post;
			}
		});
		setPosts(filterData);
	}, [match.params.slug]);

	return (
		<div>
			<CurrenPageTitle title='Inventory'></CurrenPageTitle>
			<NavLinks match={match} />
			<div className='container'>
				<div className='center'>
					<p className='text-white  mt-9 fs-23 bg-dark bg-opacity-50 p-3 rounded-3 w-auto'>
						You Don't have any inventory
					</p>
				</div>
			</div>
			{/* <div className='container mt-10 px-md-auto px-8'>
				<div className='row row-cols-lg-3 row-cols-md-2 gx-10'>
					{posts.map((post) => {
						return (
							<PostCard post={post} stepImg='/assets/imgs/droganBord.png' className='mb-9' />
						);
					})}
				</div>
			</div> */}
		</div>
	);
};

export default Inventory;
