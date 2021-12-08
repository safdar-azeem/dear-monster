import React, { createRef } from 'react';
import PostCard from './PostCard';
import data from "../../data/Post.json";


const ChooseDearMonster = () => {
	const elementGroup = createRef();

	const moveLeft = () => {
		elementGroup.current.scrollLeft -= 600;
	};
	const moveRight = () => {
		elementGroup.current.scrollLeft += 600;
	};
    return (
			<div>
				<div className='center'>
					<p className='text-white mt-9 sm-fs-29 fs-21 whiteSpace-nowrap'>
						CHOOSE A DEARMONSTER
					</p>
				</div>
				<div className='mt-6'>
					<div className='container'>
						<div
							class='mx-auto ps-md-0 ps-7  overflow-x-auto d-flex  align-items-center'
							style={{ flexWrap: 'nowrap', width: '93%' }}
							ref={elementGroup}
						>
							{data.map((post, i) => {
								return (
									<PostCard
										post={post}
										stepImg='/assets/imgs/droganBord.png'
										className={`mb-9 w-md-md2 w-md1 ${i !== data.length - 1 && 'me-10'}`}
									/>
								);
							})}
						</div>
					</div>
					<div className='d-flex  justify-content-center mb-9'>
						<img
							src='/assets/imgs/ArrowLeft.png '
							className='d-flex cursor w-76px me-6'
							onClick={moveLeft}
						/>
						<img
							src='/assets/imgs/ArrowRight.png'
							className='d-flex cursor w-76px'
							onClick={moveRight}
						/>
					</div>
				</div>
			</div>
		);
}

export default ChooseDearMonster
