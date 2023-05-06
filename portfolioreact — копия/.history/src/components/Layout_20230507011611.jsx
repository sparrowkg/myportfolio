import { NaLink, Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <header>
        <NaLink to="/Aboutpage">About</NaLink>
        <NaLink to="/Resumepage">Resume</NaLink>
        <NaLink to="/Portfoliopage">Portfolio</NaLink>
        <NaLink to="/Contactpage">Contact</NaLink>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container'>2023</footer>
    </>
  )
}

export { Layout };