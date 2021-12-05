import React, { useEffect } from 'react'


const FindMonster = ({ filterByRating, filterByLevel }) => {
	const [rating, setRating] = React.useState([]);
	const [levels, setLevels] = React.useState([]);

	const addRating = (e) => {
		setRating(rating.concat(e.target.value));
	};
	
	const removeRating = (e) => {
		const newRating = rating.filter((rating) => rating !== e.target.value);
		setRating(newRating);
	};

	const addLevels = (e) => {
		setLevels(levels.concat(e.target.value));
	};
	
	const removeLevels = (e) => {
		const newLevels = levels.filter((level) => level !== e.target.value);
		setLevels(newLevels);
	};

	useEffect(() => {
		filterByRating(rating);
	}, [rating]);

	useEffect(() => {
		filterByLevel(levels);
	}, [levels]);

	return (
		<div class='findDearMonster py-6'>
			<div class='px-5'>
				<div class='mt-7 center fw-bold fw-24 bold'>Find Your DearMonster</div>
			</div>
			<div class='ps-8 mt-8'>
				<p class='text-white mb-5'>Star Rating</p>

				{[...Array(3).keys()].map((star, i) => {
					return (
						<div class='mb-4'>
							<div class='form-check'>
								<input
									class='form-check-input p-2'
									type='checkbox'
									value={i + 1}
									onChange={(e) => {
										if (e.target.checked) {
											addRating(e);
										} else {
											removeRating(e);
										}
									}}
									id={i}
								/>
								<label class='form-check-label ms-3' for={i}>
									{[...Array(i + 1).keys()].map((star, i) => {
										return <img src='/assets/imgs/Star.png' alt='' className='me-2' />;
									})}
								</label>
							</div>
						</div>
					);
				})}
			</div>
			<section class='ps-8 mt-6 text-white'>
				<p>Level</p>

				<div class='row w-85 mt-5'>
					{[...Array(6).keys()].map((star, i) => {
						return (
							<div class='col-4 mb-5'>
								<div class='form-check'>
									<input
										class='form-check-input p-2'
										type='checkbox'
										value={i + 1}
										onChange={(e) => {
											if (e.target.checked) {
												addLevels(e);
											} else {
												removeLevels(e);
											}
										}}
										id={i}
									/>
									<label class='form-check-label ms-2' for={i}>
									{i+1}
									</label>
								</div>
							</div>
						);
					})}
				</div>

				
			</section>
			<footer class='mt-6'>
				<div class='filterCheckBtn  w-140px mx-auto py-3 center bold'>Filter</div>
			</footer>
		</div>
	);
};




export default FindMonster
