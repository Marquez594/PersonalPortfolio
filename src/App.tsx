import Nav from "./components/nav"
import Contact from "./components/contact"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
function App(){
  return (
    //This will the the body of the page
    <div className="min-h-screen min-w-screen">
      <Nav></Nav>
      <Contact></Contact>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  )
}

export default App