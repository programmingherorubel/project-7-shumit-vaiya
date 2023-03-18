import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './components/Navbar';
import AddNewJob from './Pages/AddNewJob'
import EditJob from './Pages/EditJob';
import { fetchJobsInformation } from './features/JobInformation/JobSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchJobsInformation())
},[dispatch,])

  return (
    <div className="App">
       <BrowserRouter>
            <Navbar/>
            <Routes> 
                <Route path='/'element={<Home />}></Route>
                <Route path='/addnewjob'element={<AddNewJob />}></Route>
                <Route path='jobs/:editjob'element={<EditJob />}></Route>
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
