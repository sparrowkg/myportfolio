// import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Aboutpage} from './pages/Aboutpage'
import {Resumepage} from './pages/Resumepage'
import {Portfoliopage} from './pages/Portfoliopage'
import {Contactpage} from './pages/Contactpage'

function App() {
  return (
   <>
   <header>
    <a href="/">About</a>
    <a href="/resume">Resume</a>
    <a href="/portfolio">Portfolio</a>
    <a href="/contact">Contact</a>
   </header>
   <Routes>
     <Routep />
   </Routes>
   </>
  );
}

export default App;
