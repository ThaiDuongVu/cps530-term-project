import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ReactSummary from './ReactSummary';
import NodeSummary from './NodeSummary';
import ReactInstallTutorial from './ReactInstallTutorial';
import NodeInstallTutorial from './NodeInstallTutorial';
import Tutorial from './Tutorial';
import ImageRandomizer from './ImageRandomizer';
import Conclusion from './Conclusion';
import Credits from './Credits';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/react-summary' element={<ReactSummary />} />
        <Route path='/node-summary' element={<NodeSummary />} />
        <Route path='/react-install-tutorial' element={<ReactInstallTutorial />}/>
        <Route path='/node-install-tutorial' element={<NodeInstallTutorial />}/>
        <Route path='/tutorial' element={<Tutorial />}/>
        <Route path='/image-randomizer' element={<ImageRandomizer />}/>
        <Route path='/conclusion' element={<Conclusion />} />
        <Route path='/credits' element={<Credits />} />
        {/* Add 404 handler page */}
      </Routes>
    </HashRouter>
  );
}

export default App;
