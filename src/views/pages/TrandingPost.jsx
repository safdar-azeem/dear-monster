import React, { useEffect } from 'react';
import FindMonster from '../../components/TrandingPost/FindMonster';
import PostCard from "../../components/postCard/PostCard"
import { useHistory } from 'react-router';
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
		title: 'Rhino',
		img: '/assets/imgs/animale2.png',
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


const TrandingPost = ({  }) => {
	const history = useHistory()
	const historyQuery=new URLSearchParams(history.location.search);

	const [currentPage, setCurrentPage] = React.useState(Number(historyQuery.get('page')) || 1);
	const [postsPerPage] = React.useState(Number(historyQuery.get('limit')) || 1);
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
	const totalPages = Math.ceil(data.length / postsPerPage);

	const nextPage = () => {
		if (currentPage < Math.ceil(data.length / postsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	useEffect(() => {
		currentPage &&	history.push(`/tranding-post?page=${currentPage}&limit=${postsPerPage}`);
	}, [currentPage]);




	return (
		<div className='mt-lg-9 mt-7 container'>
			<div class='row'>
				<div class='col-lg-3 col-12'>
					<FindMonster />
				</div>
				<div class='col-lg-9 col-12'>
					<section className='row row-cols-lg-3  gx-8 mt-9 	mt-lg-0 '>
						{currentPosts.map((post) => {
							return (
								<PostCard post={post} stepImg='/assets/imgs/droganBord.png' className='mb-9' />
							);
						})}
					</section>
					<footer className='center pb-8 pt-4'>
						<img src='/assets/imgs/ArrowLeft.png ' className='cursor' onClick={previousPage} />
						<p className='text-white fs-22 mx-5'>
							{currentPage}/{totalPages}
						</p>
						<img src='/assets/imgs/ArrowRight.png' className='cursor' onClick={nextPage} />
					</footer>
				</div>
			</div>
		</div>
	);
};

export default TrandingPost;
