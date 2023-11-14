import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home , Defaultpage } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar title="My First react App" />
        <Routes>
          <Route path='/home' element={<Defaultpage page = "Home"/>} /> 
          <Route path='/about' element={<About page = "About" />} />  
          <Route path='/contact' element={<Contact page = "About" />} /> 
        </Routes>
      </Router>
      <module1 />
    </>
  );
}

export default App;
