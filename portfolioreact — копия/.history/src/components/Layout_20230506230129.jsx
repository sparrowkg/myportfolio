import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
         <header>
          <Link to="/">About</Link>
          <Link to="/Resumepage">Resume</Link>
          <Link to="/ortfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
         </header>
         <Outlet />
         <footer>2023</footer>
    </>
  )
}

export {Layout}