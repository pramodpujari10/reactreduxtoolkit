import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
// import Employees from './components/Employees'
import EmployeesRedux from './components/EmployeesRedux';

// import Counter from './components/Counter'
import CounterRedux from './components/CounterRedux'
// import UserList from './components/UserList'
import UserListRedux from './components/UserListRedux'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        
        <Route path={'/employees'} element={<EmployeesRedux />} />
        <Route path={'/counter'} element={<CounterRedux />} />
        <Route path={'/users'} element={<UserListRedux />} />
      </Routes>
    
    </React.Fragment>
  );
}

export default App;
