import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/login';
import Dashboard from './paginas/auth/dashboard';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/dasboard" exact element={<Dashboard/>}/> 
        </Routes>
      </Router>      
    </Fragment>
  );
}

export default App;
