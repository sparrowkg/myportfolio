import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <NavLink to="/" className={setActive}>About</NavLink>
          <NavLink to="/Resumepage" className={setActive}>Resume</NavLink>
          <NavLink to="/Portfoliopage" className={setActive}>Portfolio</NavLink>
          <NavLink to="/Contactpage" className={setActive}>Contact</NavLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}