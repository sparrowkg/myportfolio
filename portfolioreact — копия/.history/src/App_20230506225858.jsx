import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Aboutpage} from './pages/Aboutpage'
import {Resumepage} from './pages/Resumepage'
import {Portfoliopage} from './pages/Portfoliopage'
import {Contactpage} from './pages/Contactpage'
import {Layout} from './components/Layout'

function App() {
  return (
   <>
  < BrowserRouter
   <Routes>
     <Route path="/" element ={<layout />}>
       <Route index element={<Aboutpage/>} />
       <Route path="resume" element={<Resumepage/>} />
       <Route path="portfolio" element={<Portfoliopage/>} />
       <Route path="contact" element={<Contactpage/>} />
     </Route>

   </Routes>
   </>
  );
}

export default App;
