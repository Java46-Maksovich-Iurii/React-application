import { randomBytes } from 'crypto';
import React from 'react';
import Life from './components/Life';
import lifeGameConfig from './config/lifeGameConfig.json'

function App() {
 
  return (
    <>
    <Life dimension={lifeGameConfig.dimension} ticInterval={lifeGameConfig.tic}></Life>
    </>
  )
}

export default App;
