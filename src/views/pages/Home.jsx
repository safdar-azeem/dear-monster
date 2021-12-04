import React from 'react'

const Home = ({history}) => {
	React.useEffect(() => {
		history.push('/hunters-valley');
	}, [])
    return (
			<div>		
			</div>
		);
}

export default Home
