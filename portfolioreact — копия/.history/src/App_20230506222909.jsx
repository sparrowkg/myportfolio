import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Aboutpage} from './pages/Aboutpage'
import {Resumepage} from './pages/Resumepage'
import {Portfoliopage} from './pages/Portfoliopage'
import {Contactpage} from './pages/Contactpage'

function App() {
  return (
   <>
   <header>
    <Link to="/">About</a>
    <Link to="/resume">Resume</a>
    <Link to="/portfolio">Portfolio</a>
    <Link to="/contact">Contact</a>
   </header>
   <Routes>
     <Route path="/" element={<Aboutpage/>} />
     <Route path="/resume" element={<Resumepage/>} />
     <Route path="/portfolio" element={<Portfoliopage/>} />
     <Route path="/contact" element={<Contactpage/>} />

   </Routes>
   </>
  );
}

export default App;
