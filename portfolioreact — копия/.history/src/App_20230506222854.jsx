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
    <Link href="/">About</a>
    <Link href="/resume">Resume</a>
    <Link href="/portfolio">Portfolio</a>
    <Link href="/contact">Contact</a>
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
