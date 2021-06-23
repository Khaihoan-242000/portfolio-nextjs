import Head from 'next/head'
import Home from "../Components/Home"
import About from "../Components/About"
import Skills from "../Components/Skills"
import Qualification from '../Components/Qualification'
import Services from '../Components/Services'
import Portfolio from '../Components/Portfolio'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import ScrollTop from '../Components/ScrollTop'

/* Theme dark */


const Main = () => {

  return (
    <main className="main">
      <Head>
        <title>Khai Hoan - Jimmy - Web Developer</title>
      </Head>
      {/*============ Home =============*/}
      <Home />
      {/*============ About =============*/}
      <About />
      {/*============ Skills =============*/}
      <Skills />
      {/*============ Qualification =============*/}
      <Qualification />
      {/*============ Services =============*/}
      <Services />
      {/*============ Portfolio =============*/}
      <Portfolio />
      {/*============ Project =============*/}
      <Project />
      {/*============ Contact =============*/}
      <Contact />
      {/*============ ScrollTop =============*/}
      <ScrollTop />
    </main>
  )
}

export default Main