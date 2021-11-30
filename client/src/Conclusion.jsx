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
						The expectations coming into this project like many of the labs was relatively medium in respect to the difficulty picking up
						a new framework.
						<br />
						<br />
						For the project we knew nothing about React and Node.js but at the same time were reassured that we had much
						time to learn it. The setup was more or less straightforward. Using VS code, github and online tutorials it was simple to
						organize and install the frameworks and packages needed to start creating our pages. The pages were relatively easy to set up
						and create, especially because we could link together pages using the import function. Since we had more than a month to work
						on the project, we had much time to study and implement the framework so when it came time to start creating the pages, it was
						a nice quick process. Whereas with JavaScript, PHP, and all the other languages we have touched on, having one to two weeks to
						cover the languages meant when it came to labs, we found ourselves scrambling back to lecture notes to review the languages.
						<br />
						<br />
						So the learning curve for this project was relatively a shallow curve. Node.js and React are very popular and are used by many
						big company names so learning this framework would be good to have knowledge of. Also the amount of online information was very
						helpful and made the process to learn the frameworks that much easier. Thus, we wouldn’t have changed anything for our approach
						or chosen different frameworks. We would highly recommend Node.js and React to others to pick up.
					</p>
				</div>
				<div className='col-3'></div>
			</div>
		</div>
	);
}

export default Conclusion;