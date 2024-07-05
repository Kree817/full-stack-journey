import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './Components/About';
import ListStudents from './Components/ListStudents';
import CreateStudents from './Components/CreateStudents';
import UpdateStudents from './Components/UpdateStudents';
import Header from './Components/Header';

function App() {

  return (

    <div>
      <BrowserRouter>
      <Header/>
      <br/>
        <Routes>
            <Route path='/' element={<About/>}></Route>
            <Route path='/list' element={<ListStudents/>}></Route>
            <Route path='/create' element={<CreateStudents/>}></Route>
            <Route path='/update' element={<UpdateStudents/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
