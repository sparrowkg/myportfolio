import { Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <Link to="/" className={setActive}>About</Link>
          vLink to="/Resumepage" className={setActive}>Resume</Link>
          <Link to="/Portfoliopage" className={setActive}>Portfolio</Link>
          <Link to="/Contactpage" className={setActive}>Contact</Link>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}