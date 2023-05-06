import { Link, Outlet } from 'react-router-dom';
// import { CustomLink } from './CustomLink';

// const setActive = ({ isActive }) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">About</Link>
        <Link to="/Resumepage">Resume</Link>
        <Link to="/Portfoliopage">Portfolio</Link>
        <Link to="/Contactpage">Contact</Link>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container'>2023</footer>
    </>
  )
}

export { Layout };