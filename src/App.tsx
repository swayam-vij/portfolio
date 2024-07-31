import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Footer from "./components/Footer"
// import Contact from "./components/Contact"




const App = () => {
  return (
    <div className="text-slate-200">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>
      <div className="conatiner mx-auto">
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Footer />
        {/* <Contact /> */}
      </div>
    </div>
  )
}

export default App