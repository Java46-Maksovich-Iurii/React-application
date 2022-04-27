import { randomBytes } from 'crypto';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { COURSES_PATH, ROUTES } from './config/routs-config';
import Navigator from './components/navigators/Navigator';

const App: React.FC = () => {
 return <BrowserRouter>
 <Navigator items={ROUTES}/>
 
 <Routes>
 {getRoutes()}
 </Routes>
 </BrowserRouter>
}

export default App;
function getRoutes(): React.ReactNode {
  return ROUTES.map(r => <Route key={r.path} path={r.path} element={r.element}/>)
}
