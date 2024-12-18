import './hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div></div>
      <div className='imageContainer'>
        <object
          data='/1-2-char-no-eyes-animated.svg'
          type='image/svg+xml'
          alt='hero.svg'></object>
      </div>
    </div>
  );
};

export default Hero;
