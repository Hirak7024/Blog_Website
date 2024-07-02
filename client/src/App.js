import React, { useEffect } from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import ReaderRoutes from './Routers/ReaderRoutes';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location]);

  return (
    <>
     <ToastContainer />
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<ReaderRoutes/>} />
    </Routes>
    </>
  )
}

export default App
