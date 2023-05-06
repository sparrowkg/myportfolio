import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

// const setActive = ({ isActive }) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="/Resumepage">Resume</CustomLink>
        <CustomLink to="/Portfoliopage">Portfolio</CustomLink>
        <CustomLink to="/Contactpage">Contact</CustomLink>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='con'>2023</footer>
    </>
  )
}

export { Layout };