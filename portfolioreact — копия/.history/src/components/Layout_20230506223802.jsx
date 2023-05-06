import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
         <header>
          <Link to="/">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
         </header>
         <Outlet />
         
    </>
  )
}

export {Layout}