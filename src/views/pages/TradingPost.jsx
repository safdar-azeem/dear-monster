import React, { useEffect, useState, useCallback } from 'react';
import FindMonster from '../../components/TradingPost/FindMonster';
import PostCard from '../../components/postCard/PostCard';
import { useHistory } from 'react-router';
import CurrenPageTitle from '../../components/common/CurrenPageTitle';

const data = [
	{
		id: '#123212',
		title: 'Dragon',
		img: '/assets/imgs/drogan.png',
		rating: '3',
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
		title: 'Dragon',
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
		title: 'Rhino',
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
		title: 'Dragon',
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
		title: 'Dragon',
		img: '/assets/imgs/drogan.png',
		rating: '1',
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
		title: 'Dragon',
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
		title: 'Dragon',
		img: '/assets/imgs/drogan.png',
		rating: '1',
		totalRating: 3,
		values: {
			level: '2/612 Exp',
			element: 'None',
			ownerId: 'A34500',
		},
		price: '3,000',
	},
];

const TradingPost = ({}) => {
	const history = useHistory();
	const historyQuery = new URLSearchParams(history.location.search);

	const [currentPage, setCurrentPage] = React.useState(Number(historyQuery.get('page')) || 1);
	const [posts, setPosts] = useState(data);
	const [postsPerPage] = React.useState(Number(historyQuery.get('limit')) || 6);
	const [currentPosts, setCurrentPosts] = useState([]);
	const [error,setError]=useState('');
	const totalPages = Math.ceil(posts.length / postsPerPage);




	useEffect(() => {
		const indexOfLastPost = currentPage * postsPerPage;
		const indexOfFirstPost = indexOfLastPost - postsPerPage;
		setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
	}, [currentPage, postsPerPage, posts]);

	const nextPage = () => {
		if (currentPage < Math.ceil(posts.length / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	useEffect(() => {
		currentPage && history.push(`/trading-post?page=${currentPage}&limit=${postsPerPage}`);
	}, [currentPage]);

	const filterByRating = (rating) => {
		if (rating.length>=1) {
			const filteredData = data.filter((item) => rating.includes(item.rating));
			if(filteredData.length==0){
				setError('No Data found');
			}
			setPosts(filteredData);
		}else{
			setPosts(data);
			setError('');
		}
	};

	const filterByLevel = (level) => {
		if (level.length >= 1) {
			const filteredData = data.filter((item) => level.includes(item.values.level[0]));
			if (filteredData.length == 0) {
				setError('No Data found');
			}
			setPosts(filteredData);
		} else {
			setPosts(data);
			setError('');
		}
	};


	return (
		<div>
			<CurrenPageTitle title='Trading Post'></CurrenPageTitle>
			<div className='mt-lg-9 mt-7 container'>
				<div class='row gx-7  px-md-auto px-0'>
					<div class='col-md-5 col-lg-3 col-11'>
						<FindMonster filterByRating={filterByRating} filterByLevel={filterByLevel} />
					</div>
					<div class='col-lg-9 col-md-7 col-12'>
						<div class='px-md-0'>
							<section className='row row-cols-lg-3  gx-8 mt-9 	mt-md-0 '>
								{error && currentPosts.length == 0 ? (
									<div className='col-12 center w-100 text-white mt-5'>
										<h3>{error}</h3>
									</div>
								) : (
									currentPosts.map((post) => {
										return (
											<PostCard
												post={post}
												stepImg='/assets/imgs/droganBord.png'
												className='mb-9'
											/>
										);
									})
								)}
							</section>
						</div>
						{error && currentPosts.length == 0 ? (
							''
						) : (
							<footer className='center pb-8 pt-4'>
								<img
									src='/assets/imgs/ArrowLeft.png '
									className='cursor'
									onClick={previousPage}
								/>
								<p className='text-white fs-22 mx-5'>
									{currentPage}/{totalPages}
								</p>
								<img src='/assets/imgs/ArrowRight.png' className='cursor' onClick={nextPage} />
							</footer>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TradingPost;
