import { Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <CustomLink to="/" className={setActive}>About</CustomLink>
          CustomvLink to="/Resumepage" className={setActive}>Resume</CustomLink>
          <CustomLink to="/Portfoliopage" className={setActive}>Portfolio</CustomLink>
          <CustomLink to="/Contactpage" className={setActive}>Contact</CustomLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}