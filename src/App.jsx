import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Timeline from './components/timeline/Timeline';
import Skills from './components/skills/Skills';
import ProjectParallax from './components/projectparallax/ProjectParallax';

const App = () => {
  return (
    <div>
      <Navbar className='Navbar' />
      <object
        className='bg-pattern'
        data='/0-1-pattern-bg-dark.svg'
        type='image/svg+xml'
        alt='pattern.svg'></object>
      <section id='About'>
        <Hero />
      </section>
      <section>
        <Timeline />
      </section>
      <section>
        <Skills />
      </section>
      <section id='Projects'>
        <ProjectParallax />
      </section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section>Project 4</section>
      <section id='Contact'>Contact</section>
    </div>
  );
};

export default App;
