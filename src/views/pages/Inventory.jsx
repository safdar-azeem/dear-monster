import React, { useEffect } from 'react';
import CurrenPageTitle from '../../components/common/CurrenPageTitle';
import NavLinks from '../../components/Inventory/NavLinks';
import PostCard from '../../components/Inventory/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { connectUserAction, connectUserSuccess } from './../../store/actions/auth/login';

const Inventory = ({ match }) => {
	const [posts, setPosts] = React.useState([]);
	const { userId } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const filterData = [...data].filter((post) => {
	// 		if (post.status === match.params.slug) {
	// 			return post;
	// 		} else if (match.params.slug === 'all') {
	// 			return post;
	// 		}
	// 	});
	// 	setPosts(filterData);
	// }, [match.params.slug]);

	const handleConnect = () => {
		dispatch(connectUserAction());
	};

	return (
		<div>
			<CurrenPageTitle title='Inventory'></CurrenPageTitle>
			<NavLinks match={match} />
			<div className='container'>
				<div className='center'>
					{userId ? (
						<p className='text-white  mt-9 fs-23 bg-dark bg-opacity-50 p-3 rounded-3 w-auto'>
							You Don't have any inventory
						</p>
					) : (
						<div>
							<p className='text-white  mt-9 fs-23 bg-dark bg-opacity-50 p-3 rounded-3 w-auto'>
								Please connect to see Inventory
							</p>
							<div
								onClick={handleConnect}
								class={` header-Connect-btn h-40px w-sm mx-auto  mt-5 center bold cursor`}
							>
								Connect
							</div>
						</div>
					)}
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
