import './App.css'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main from './components/main/MainSection';
import { Navbar } from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {

  return (
  <>
      <Navbar/>
      <Main />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
  </>
  );
}

export default App
