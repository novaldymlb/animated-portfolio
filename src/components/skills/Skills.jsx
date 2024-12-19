import './skills.scss';

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='title'>SKILLS</h1>
      <div className='skills-box'>
        <object
          data='/skills-portfolio.svg'
          type='image/svg+xml'
          alt='skills.svg'></object>
      </div>
      <button>Show all</button>
    </div>
  );
};
export default Skills;
