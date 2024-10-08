import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';

import ReactGA from "react-ga4";
import { useEffect } from 'react';

const App = () => {
  ReactGA.initialize('G-V0F19QMKQT');

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    
    <div className="App">
      <Components />
      <ScrolToTop/>
       
    </div>
  );
  
}

export default App;