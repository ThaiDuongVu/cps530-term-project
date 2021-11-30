import React from 'react';
import NavigationBar from './NavigationBar';

const Credits = () => {
	return (
		<div>
			<NavigationBar />
			<br />
			<div className='row'>
				<div className='col'>
					<h1 className='text-center'>Credits</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-3'></div>
				<div className='col-6'>
					<hr />
					<p>
						<h3>Team Members</h3>
						<p>
							Manav Harshkumar Dhora - Computer Science Major completing his third year undergrad at Ryerson <br />
							Peri Venetis - Computer Science Major completing his third year undergrad at Ryerson <br />
							Duong Vu - Computer Science Major completing his third year undergrad at Ryerson <br />
						</p>
						<h3>Responsiblities of Members</h3>
						<p>
							<strong>Manav Dhora</strong>
							<ul>
								<li>
									Created the Tutorial page for the installation of frameworks (React.js and Node.js)	on Windows 10
								</li>
								<li>
									Created the Credits page mentioning the Team members and their responsiblities with the Reference WebPages used.
								</li>
								<li>
									Worked on the Demo webpage and its Tutorial
								</li>
							</ul>
						</p>
						<p>
							<strong>Peri Venetis</strong>
							<ul>
								<li>
									Created the Conclusion page mentioning the experience with the Frameworks
								</li>
								<li>
									Worked on the Demo webpage and its Tutorial
								</li>
								<li>
									Responsible for citing references from research materials
								</li>
							</ul>
						</p>
						<p>
							<strong>Duong Vu</strong>
							<ul>
								<li>
									Created the summary page for the Framework (React.js and Node.js)
								</li>
								<li>
									Created the Image Randomizer the demo webpage application
								</li>
								<li>
									Worked on the Demo webpage and its Tutorial
								</li>
							</ul>
						</p>
						<h3>References Links</h3>
						<p>
							Brewster, C. (n.d.). 15 companies that use Node.js in 2021 successfully. Trio Developers. Retrieved November 30, 2021, from https://trio.dev/blog/companies-use-node-js
							<br />
							<br />
							Chrzanowska, N. (2021, August 24).
							Why to use node.js: Pros and cons of choosing node.js for back-end development. Custom Software Development. Retrieved November 30, 2021, from https://www.netguru.com/blog/pros-cons-use-node.js-backend
							<br />
							<br />
							Insignares, A. (2021, March 10). React pros and cons: What are the advantages and disadvantages of reactjs? Koombea. Retrieved November 30, 2021, from https://www.koombea.com/blog/react-pros-and-cons-what-are-the-advantages-and-disadvantages-of-reactjs/
							<br />
							<br />
							Mungai, G. (2020, August 13). Why is node.js wildly popular among developers? Why is Node.js wildly popular among developers? Retrieved November 30, 2021, from https://www.section.io/engineering-education/why-node-js-is-popular/
							<br />
							<br />
							Sev, C. (2021, November 12). React popularity when not to use react. Better Dev. Retrieved November 30, 2021, from https://www.better.dev/react-popularity
							<br />
							<br />
							Wikimedia Foundation. (2021, November 26). React (JavaScript library). Wikipedia. Retrieved November 30, 2021, from https://en.wikipedia.org/wiki/React_(JavaScript_library)
							<br />
							<br />
							Wikimedia Foundation. (2021, November 29). Node.js. Wikipedia. Retrieved November 30, 2021, from https://en.wikipedia.org/wiki/Node.js
							<br />
							<br />
							Tucakov, D. (2021, September 9). How to install node.js and NPM on your windows system. Knowledge Base by phoenixNAP. Retrieved November 30, 2021, from https://phoenixnap.com/kb/install-node-js-npm-on-windows
							<br />
							<br />
							Wojciakowski, M., and Sharkey, K. (2021, May 13). Install react on windows. Install React on Windows | Microsoft Docs. Retrieved November 30, 2021, from https://docs.microsoft.com/en-us/windows/dev-environment/javascript/react-on-windows
						</p>
					</p>
				</div>
				<div className='col-3'></div>
			</div>
		</div>
	);
}

export default Credits;