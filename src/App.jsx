import { projects } from './Projects'
import "./App.css";
import Header from "./Header";
import Footer from "./Footer"
import Card from "./Card";
import Skills from './Skills'
import avatar from './assets/avatar1.png'

function App() {
  return (
    <>
    <div className='maincontainer'>
      <Header />
      <div className='main'>
        <p className='about'>
          Hello, I'm Douglas Jones. I'm a web developer currently located near
          Seattle Washington. I focus in front-end development using Javascript
          with React and VueJs as my framework of choice.
        </p>
        <div className='profile'>
        <img src={avatar} alt='profile image' />
        </div>
      </div>
        <h3>Projects</h3>
      <div className='projects'>
      {projects.map((project, index) => (
      <Card
        key={index}
        image={project.image}
        title={project.title}
        description={project.description}
        url={project.url}
        />
        ))}
      </div>
        <h3>Skills</h3>
        

        <Skills />
        <h3>Contact</h3>
        <Footer />
        </div>
    </>
  );
}

export default App;
