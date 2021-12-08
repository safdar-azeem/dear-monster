import React from 'react'
import CurrenPageTitle from '../../components/common/CurrenPageTitle';
import NavLinks from '../../components/Inventory/NavLinks';

import ChooseDearMonster from "../../components/TrainingGround/ChooseDearMonster"
import ChooseMinion from '../../components/TrainingGround/ChooseMinion';

const TrainingGround = () => {
	
	return (
		<div>
			<CurrenPageTitle title='Training Ground'></CurrenPageTitle>
			<div className='container center mt-8'>
				<div className='center flex-column'>
					<div className='border border-warning text-white p-2 rounded-2'>Total Rewards:</div>
					<section className='mt-5'>
						<div className='header-Connect-btn py-3 w-190px center bold fs-13'>
							Update Offchain Exp
						</div>
					</section>
					<section className='mt-5 d-flex align-items-center '>
						<div className='header-Connect-btn py-3 px-4 w-140px center bold fs-13'>
							Claim Reward
						</div>
						<div className='timerBoard w-170px   ms-5 center py-3 bold'>00 : 16 : 45</div>
					</section>
					<div className='header-Connect-btn py-3 px-4 mt-6 w-140px center bold fs-13'>
						Early claim
					</div>
				</div>
			</div>
			<ChooseDearMonster />
			<ChooseMinion />
		</div>
	);
}

export default TrainingGround


