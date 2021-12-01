import React from 'react';
import './bootstrap.css'
import NavigationBar from './NavigationBar';

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>CPS 530 - Web Systems Development</h1>
          <h2 className='text-center'>Term Project Submission</h2>
				</div>
			</div>
			<div className='row'>
				<div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <p>
            This website is the main entry point of the final term project of CPS 530 - Web Systems Development of Ryerson University Fall 2021.
            <br />
            <br />
            The demonstration page is located <a href='#/image-randomizer'>here</a>.
            <br />
            <br />
            Please use the navigation bar at the top of this website to navigate across other pages.
          </p>
        </div>
        <div className='col-3'></div>
			</div>
    </div>
  );
}

export default LandingPage;