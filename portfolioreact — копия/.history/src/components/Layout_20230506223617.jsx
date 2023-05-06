import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
         <header>
          <Link to="/">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
         </header>
    </div>
  )
}

expo