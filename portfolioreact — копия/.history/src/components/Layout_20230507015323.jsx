import { NavLink, Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/Aboutpage">About</NavLink>
        <NavLink to="/Resumepage.jsx">Resume</NavLink>
        <NavLink to="/Portfoliopage">Portfolio</NavLink>
        <NavLink to="/Contactpage">Contact</NavLink>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container'>2023</footer>
    </>
  )
}

export { Layout };