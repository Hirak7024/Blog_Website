import React, { useEffect } from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import ReaderRoutes from './Routers/ReaderRoutes';

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location]);

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<ReaderRoutes/>} />
    </Routes>
  )
}

export default App
