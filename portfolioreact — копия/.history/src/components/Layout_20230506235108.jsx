import { Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : ''; 

const Layout = () => {
  return (
    <>
         <header>
          <CustomLink to="/">About</CustomLink>
          CustomvLink to="/"Resumepage">Resume</CustomLink>
          <CustomLink to="/Portfoliopage">Portfolio</CustomLink>
          <CustomLink to="/Contactpage">Contact</CustomLink>
         </header>
         <main className='container'>
           <Outlet />
         </main>
        
         <footer>2023</footer>
    </>
  )
}

export {Layout}