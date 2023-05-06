import './App.css';
import {Routes, Route } from 'react-router-dom';
import {Aboutpage} from './pages/About'
import {Resumepage} from './pages/Resume'
import {Portfoliopage} from './pages/Portfolio'
import {Contactpage} from './pages/Contact'
import {Layout} from './components/Layout'

function App() {
  return (
   <>
  
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
