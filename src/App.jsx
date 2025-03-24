import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/navbar'
import Projects from './component/Projects'

function App() {

  return (
    <>
      <div className='p-0 min-h-screen flex flex-col xl:w-[1200px] mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
