import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
			<section>
				<section className='container d-flex py-4 justify-content-between  align-items-center'>
					<div>
						<img src='/assets/imgs/header/logo.png' alt='' className='w-90px' />
					</div>
					<button className='btn d-lg-none d-flex'>
						<img src='/assets/imgs/Hamburger.png' className='w-35px' alt='' />
					</button>
					<div className={`d-lg-flex d-none justify-content-between align-items-center`}>
						<Link to='/' class='header-btn text-warning me-5 px-5'>
							Hunter’s Valley
						</Link>
						<Link to='/tranding-post' class='header-btn text-warning me-5 px-5'>
							Trading Post
						</Link>
						<Link to='/' class='header-btn text-warning me-5 px-5'>
							Inventory
						</Link>
						<Link to='/' class='header-btn text-warning px-4'>
							More
						</Link>
					</div>
					<div className='d-lg-flex  d-none justify-content-between align-items-center'>
						<img src='/assets/imgs/header/logo.png' className='w-50px' />
						<div class='dms-block w-md h-40px ms-4 center px-2'>
							<div className='dms-btn w-100 me-2  center'>10000</div>
							<div className='dms-btn w-100  center'>Dms</div>
						</div>
						<div class='header-Connect-btn h-40px ms-4 w-25 center'>Connect</div>
					</div>
				</section>
				<section>
					<div class='announcementBar mt-3 h-30px center py-2 fw-bold fs-17'>
						<small>Announcement: Player A revealed a monster in the cave!</small>
					</div>
				</section>
				<section class='headingBox mt-6 center w-190px mx-auto h-70px'>Trading Post</section>
			</section>
		);
}

export default Header
