import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
         <header>
          <Link to="/">About</Link>
          <Link to="/Resumepage">Resume</Link>
          <Link to="/Portfoliopage">Portfolio</Link>
          <Link to="/Contactpage">Contact</Link>
         </header>
         <main clas>

         </main>
         <Outlet />
         <footer>2023</footer>
    </>
  )
}

export {Layout}