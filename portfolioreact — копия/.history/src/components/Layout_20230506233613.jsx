import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
         <header>
          <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
          <NavLink to="/Resumepage" className={({isActive}) => isActive ? 'active-link' : ''}>Resume</NavLink>
          <NavLink to="/Portfoliopage" className={({isActive}) => isActive ? 'active-link' : ''}>Portfolio</NavLink>
          <NavLink to="/Contactpage">Contact</NavLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}