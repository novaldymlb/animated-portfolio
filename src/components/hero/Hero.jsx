import './hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text1'>
        <div className='text1a'><object className='hand-wave' data="/1-1-hand-animated.svg" type="image/svg+xml" alt='hand-wave.svg'></object>
          Hi ‎ ‎ ‎ ‎ ‎ ‎, my
          <br />
          name is <span>Noval</span>
        </div>
        <div className='text1b'>
          I'm a <span>Front end developer</span> from <br />
          Papua barat daya, Indonesia.
        </div>
        <button className='cv-btn'>Download CV</button>
      </div>
      <div className='charImg'>
        <object
          className='eyes'
          data='/1-2-char-eyes-animated.svg'
          type='image/svg+xml'
          alt='char-eyes.svg'></object>
        <object
          className='eyebrows'
          data='/1-2-char-eyebrows-animated.svg'
          type='image/svg+xml'
          alt='char-eyebrows.svg'></object>
        <object
          data='/1-2-char-animated-dark.svg'
          type='image/svg+xml'
          alt='char-dark.svg'></object>
      </div>
    </div>
  );
};

export default Hero;
