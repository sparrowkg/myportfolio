// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Aboutpage} from './pages/Aboutpage'
import {Resumepage} from './pages/Resumepage'
import {Portfoliopage} from './pages/Portfoliopage'
import {Contactpage} from './pages/Contactpage'
import {Layout} from './components/Layout'

function App() {
  return (
   <>
  < BrowserRouter>
   <Routes>
     <Route path="/" element ={<Layout />}>
       <Route path="A" element={<Aboutpage/>} />
       <Route path="Resume" element={<Resumepage/>} />
       <Route path="Portfolio" element={<Portfoliopage/>} />
       <Route path="Contact" element={<Contactpage/>} />
     </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
