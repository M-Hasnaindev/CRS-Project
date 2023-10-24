import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Studentdashboard from './studentdashboard';
import Studentcv from './studentcv';
import Signup from './signup';
import Login from './login';
import Companydashboard from './companydashboard';
import Companyjob from './companyjob';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Companyjobdata from './companyjobdata';
import Cv from './cv';
import Apply from './apply';
import Companycheck from './companycheck'



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/student-dashboard' element={<Studentdashboard />}/>
        <Route path='/company-dashboard' element={<Companydashboard />}/>
        <Route path='/add-cv' element={<Studentcv />}/>
        <Route path='/add-job' element={<Companyjob />}/>
        <Route path='/jobs' element={<Companyjobdata />}/>
        <Route path='/cv' element={<Cv />}/>
        <Route path='/apply' element={<Apply />}/>
        <Route path='/company-check' element={<Companycheck />}/>
      </Routes>
    </Router>
    <ToastContainer theme='dark'/>
    </>
  );
}

export default App