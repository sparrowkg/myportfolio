import { Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <CLink to="/" className={setActive}>About</CLink>
          CvLink to="/Resumepage" className={setActive}>Resume</CLink>
          <CLink to="/Portfoliopage" className={setActive}>Portfolio</CLink>
          <CLink to="/Contactpage" className={setActive}>Contact</CLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}