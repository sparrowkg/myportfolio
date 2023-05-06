import { Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <CustomLink to="/" className={setAct>About</CustomLink>
          CustomvLink to="/Resumepage" className={setAct>Resume</CustomLink>
          <CustomLink to="/Portfoliopage" className={setAct>Portfolio</CustomLink>
          <CustomLink to="/Contactpage" className={setAct>Contact</CustomLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}