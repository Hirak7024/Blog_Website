import React from 'react';
import {Routes, Route} from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import ReaderRoutes from './Routers/ReaderRoutes';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<ReaderRoutes/>} />
    </Routes>
  )
}

export default App
