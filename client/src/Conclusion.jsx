import React from 'react';
import NavigationBar from './NavigationBar';

const Conclusion = () => {
	return (
		<div>
			<NavigationBar />
			<br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>Conclusion</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<p>
						Conclusion here
					</p>
				</div>
				<div className='col-3'></div>
			</div>
		</div>
	);
}

export default Conclusion;