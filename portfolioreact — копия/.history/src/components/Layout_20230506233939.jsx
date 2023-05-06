import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <NavLink to="/" className={set}>About</NavLink>
          <NavLink to="/Resumepage" className={set}>Resume</NavLink>
          <NavLink to="/Portfoliopage" className={set}>Portfolio</NavLink>
          <NavLink to="/Contactpage" className={set}>Contact</NavLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}