import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Studentdashboard from './studentdashboard';
import Studentcv from './studentcv';
import Signup from './signup';
import Login from './login';
import Companydashboard from './companydashboard';
import Companyjob from './companyjob';
// import Admin_dashboard from './AdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/student-dashboard' element={<Studentdashboard />}/>
        <Route path='/company-dashboard' element={<Companydashboard />}/>
        <Route path='/add-cv' element={<Studentcv />}/>
        <Route path='/add-job' element={<Companyjob />}/>
      </Routes>
    </Router>
  );
}

export default App;
