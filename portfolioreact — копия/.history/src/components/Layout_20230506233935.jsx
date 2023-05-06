import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <NavLink to="/" className={}>About</NavLink>
          <NavLink to="/Resumepage" className={}>Resume</NavLink>
          <NavLink to="/Portfoliopage" className={}>Portfolio</NavLink>
          <NavLink to="/Contactpage" className={}>Contact</NavLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}