import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
  <>
    <h1 className = 'title'>Current time</h1>
    <div className='timer-placeholder'>
      <Timer interval={1000} city = 'Tel Aviv' gmt = {3} />
      <Timer interval={1000} city = 'Beijing' gmt = {8}/>
      <Timer interval={1000} city = 'New York' gmt = {-4}/>
      <Timer interval={1000} city = 'London' gmt = {1}/>
    </div>
  </>
  )
}

export default App;
