import './App.css';
import About from './Components/About'
import Home from './Components/Home';
import Course from './Components/Course';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/course' element={<Course />}></Route>
          <Route path='/student' element={<Student />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
