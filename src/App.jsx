import './app.scss';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        Hero
        <div>
          <a href=''>Link</a>
        </div>
      </section>
      <section>Timeline</section>
      <section>Skill</section>
      <section>Project Parallax</section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section>Project 4</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
