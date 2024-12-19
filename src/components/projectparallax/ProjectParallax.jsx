import './projectparallax.scss';

const ProjectParallax = () => {
  return (
    <div className='projectparallax'>
      <h1 className='title'>PROJECTS</h1>
      <div className='projectparallax-box'>
        <object
          data='/2-2-char-project-dark-animated.svg'
          type='image/svg+xml'
          alt='hero-bg-project.svg'></object>
        <object className='laptop'
          data='/2-1-desk-laptop-dark.svg'
          type='image/svg+xml'
          alt='hero-laptop.svg'></object>
        <object
          className='smoke'
          data='/2-1-smoke-animated.svg'
          type='image/svg+xml'
          alt='hero-coffee-smoke.svg'></object>
      </div>
    </div>
  );
};
export default ProjectParallax;
