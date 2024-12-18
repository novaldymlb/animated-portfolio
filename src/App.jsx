import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <div>
      <section id='About'>
        <Navbar />
        <Hero />
      </section>
      <section>Timeline</section>
      <section>Skill</section>
      <section id='Projects'>Project Parallax</section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section>Project 4</section>
      <section id='Contact'>Contact</section>
    </div>
  );
};

export default App;
