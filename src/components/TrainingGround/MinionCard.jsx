import React from 'react';
import { fightAction } from '../../store/actions/fight/';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../common/Loading';

const MinionCard = ({ className, post, stepImg }) => {
	const dispatch = useDispatch();
	const { status, loading } = useSelector((state) => state.fight);
	return (
		<div className={`${className}`}>
			<main class='center flex-column'>
				<div>
					<img src={post.img} className='w-md h-lg' />
				</div>
				<div
					class='findDearMonster h-md2 pt-4 pb-6 '
					style={{ marginTop: '-85px', width: '280px' }}
				>
					<p className='text-center mt-3  fs-18 bold'>{post.title}</p>
					<div className='text-white center flex-column mt-8 fs-15'>
						{Object.keys(post.values).map((key, index) => {
							const key2 = key.split('_').join(' ');
							return (
								<div className='mb-4'>
									<span className='me-2'>{key2} :</span>
									<span>{post.values[key]}</span>
								</div>
							);
						})}
					</div>
				</div>
			</main>
			<footer className='center mt-5 '>
				<div
					class='header-Connect-btn h-40px center w-100px px-2 bold cursor'
					data-bs-toggle='modal'
					data-bs-target='#exampleModal'
					onClick={() => dispatch(fightAction())}
				>
					Fight
				</div>
			</footer>
			<div
				class='modal fade'
				id='exampleModal'
				tabindex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div class='modal-dialog'>
					<div class='modal-content bg-dark bg-opacity-75 border-0 py-7 text-white'>
						<div className='modal-body center fs-25'>
							{loading ? <Loading /> : `${status} `}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MinionCard;
