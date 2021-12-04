import React from 'react';

const PostCard = ({ className, post, stepImg }) => {
	return (
		<div className={`${className}`}>
			<header className='center mb-5'>
				<div class='header-Connect-btn h-25px center px-1 w-90px fs-12'>{post.id}</div>
			</header>
			<main class='center flex-column'>
				<div>
					<img src={post.img} className='img-fluid' />
				</div>
				<div class='position-relative'>
					<img
						src={stepImg}
						className='img-fluid position-relative'
						style={{ transform: 'translateY(-21%)', zIndex: '-1' }}
					/>
				</div>
				<div class='findDearMonster w-100   h-100 py-4 ' style={{ marginTop: '-139px' }}>
					<p className='text-center mt-29px fs-18'>{post.title}</p>
					<div className='center mt-5'>
						<div>
							{[...Array(post.totalRating)].map((e, i) => {
								return (
									<img
										src={
											post.rating <= i ? '/assets/imgs/dimStar.png': '/assets/imgs/star.png'
										}
										className='me-2'
									/>
								);
							})}
						</div>
					</div>
					<div className='text-white center flex-column mt-5 fs-18'>
						{Object.keys(post.values).map((key, index) => {
							return (
								<div className='mb-4'>
									<span className='me-2'>{key} :</span>
									<span>{post.values[key]}</span>
								</div>
							);
						})}
					</div>
					<div className='center center mt-5 mb-4  fs-19 text-white'>
						<img src='/assets/imgs/header/logo.png' className='w-45px me-4' />
						<p className='fs-30'>3,000</p>
					</div>
				</div>
			</main>
			<footer className='center mt-6'>
				<div class='header-Connect-btn h-40px center w-100px px-2'>Connect</div>
			</footer>
		</div>
	);
};

export default PostCard;
