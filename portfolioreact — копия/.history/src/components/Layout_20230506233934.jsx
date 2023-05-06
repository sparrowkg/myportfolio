import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <NavLink to="/" cl>About</NavLink>
          <NavLink to="/Resumepage" cl>Resume</NavLink>
          <NavLink to="/Portfoliopage" cl>Portfolio</NavLink>
          <NavLink to="/Contactpage" cl>Contact</NavLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}