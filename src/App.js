import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Default from "./pages/Default";

import TestPage from "./pages/TestPage";
function App() {
  return (
    <>
      <Router>
        <Navbar title="My First react App" />
        <Routes>
          <Route path="/" element={<Default page="Default" />} />
          <Route path="/home" element={<Home page="Home" />} />
          <Route path="/about" element={<About page="About" />} />
          <Route path="/contact" element={<Contact page="Contact" />} />
          <Route path="/TestPage" element={<TestPage page="TestPage" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
