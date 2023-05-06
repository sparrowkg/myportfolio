import { Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <CuLink to="/" className={setActive}>About</CuLink>
          CuvLink to="/Resumepage" className={setActive}>Resume</CuLink>
          <CuLink to="/Portfoliopage" className={setActive}>Portfolio</CuLink>
          <CuLink to="/Contactpage" className={setActive}>Contact</CuLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}