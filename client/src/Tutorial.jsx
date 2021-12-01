import React from 'react';
import NavigationBar from './NavigationBar';

const Tutorial = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h1 className='text-center'>Tutorial: How to create a simple image randomizer using ReactJS and Node JS</h1>
        </div>
        <div className='col-3'></div>
      </div>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <hr />
          <p>
            In this short tutorial we'll be creating a website that displays an image and refreshes that image everytime we press a button.
            <br />
            <br />

            <h3>Prerequisites</h3>
            <p>
              To follow along with this tutorial, you will need some basic knowledge of the JavaScript programming language. You will also need ReactJS and NodeJS installed on your system of choice. Please follow our tutorial <a href='#/react-install-tutorial'>here</a> and <a href='#/node-install-tutorial'>here</a> on how to install ReactJS and NodeJS respectively.
            </p>

            <h3>Back-end</h3>
            <p>
              First we need a server to store the images and send back a randomized image everytime we want. We'll create a folder for the server, then initialize NodeJS and install the neccessary package. Here are the command lines to perform these operations:
              <br />
              <pre>
                .../project-directory>mkdir server <br />
                .../project-directory>cd server <br />
                .../project-directory/server>npm init <br />
                .../project-directory/server>npm install express <br />
              </pre>
              We now need the actual images themselves stored in a folder within <code>server</code> folder. We'll create an <code>images</code> folder and download some images from the Internet to be randomized, we'll named them img1, img2,..., img20.
              <pre>
              .../project-directory/server>mkdir images <br />
              .../project-directory/server>cd images <br />
              .../project-directory/server/images>ls <br />
                Mode                 LastWriteTime         Length Name <br />
                ----                 -------------         ------ ---- <br />
                -a----        11/19/2021  10:13 AM          53972 img1.jpg <br />
                -a----        11/19/2021  10:17 AM          74204 img10.jpg <br />
                -a----        11/19/2021  10:17 AM          29773 img11.jpg <br />
                -a----        11/19/2021  10:18 AM          40304 img12.jpg <br />
                -a----        11/19/2021  10:18 AM         166364 img13.jpg <br />
                -a----        11/19/2021  10:18 AM         168654 img14.jpg <br />
                -a----        11/19/2021  10:18 AM          18952 img15.webp <br />
                -a----        11/19/2021  10:19 AM         374744 img16.jpg <br />
                -a----        11/19/2021  10:19 AM          57754 img17.jpg <br />
                -a----        11/19/2021  10:19 AM         153552 img18.webp <br />
                -a----        11/19/2021  10:26 AM           5691 img19.jpg <br />
                -a----        11/19/2021  10:14 AM         405761 img2.jpg <br />
                -a----        11/19/2021  10:26 AM           4004 img20.jpg <br />
                -a----        11/19/2021  10:14 AM         218622 img3.jpg <br />
                -a----        11/19/2021  10:14 AM          19658 img4.webp <br />
                -a----        11/19/2021  10:14 AM         217530 img5.jpg <br />
                -a----        11/19/2021  10:17 AM           5265 img6.jpg <br />
                -a----        11/19/2021  10:17 AM           5844 img7.jpg <br />
                -a----        11/19/2021  10:17 AM           8246 img8.jpg <br />
                -a----        11/19/2021  10:17 AM           5053 img9.jpg <br />
              </pre>
              Now we need some code to handle requests to the server and send back one of the images that we downloaded.
              <br />
              In our <code>server</code> folder, we create a <code>src</code> folder to store our source code files. In that folder we create an <code>index.js</code> file.
              <br />
              In the <code>index.js</code> file, add the following code:
              <br />
              <br />
              <img src={process.env.PUBLIC_URL + '/images/code1.png'} />
              <br />
              <img src={process.env.PUBLIC_URL + '/images/code2.png'} />
              <br />
              To verify that our code works, we can start a local server at <code>https://localhost:3000/</code> using the command <code>node start</code> and go to <code>https://localhost:3000/image</code> to get an image.
              <pre>
              .../project-directory/server>node start <br />
              </pre>
            </p>

            <h3>Front-end</h3>
            <p>
              Once we have a server up and running, we'll create a front-end application using ReactJS to fetch and display our images. In the project directory, we run the command <code>npx create-react-app client</code>, this will create a folder named <code>client</code> with everything we need to build a React app.
              <pre>
              .../project-directory/>npx create-react-app client<br />
              .../project-directory/>cd client<br />
              </pre>
              In the <code>App.js</code> file, add the following code:
              <br />
              <br />
              <img src={process.env.PUBLIC_URL + '/images/code3.png'} />
              <br />
              <em>Note:</em> replace <code>https://cps530-term-project-server.herokuapp.com/image</code> with <code>https://localhost:3000/</code> if you're running the back-end on a local server or the url of your server if it is hosted externally.
            </p>

            <h3>Results</h3>
            The results of this tutorial can be viewed <a href='#/image-randomizer'>here</a>.
          </p>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
}

export default Tutorial;