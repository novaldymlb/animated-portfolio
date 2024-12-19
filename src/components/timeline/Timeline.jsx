import './timeline.scss';

const Timeline = () => {
  return (
    <div className='timeline'>
      <h1 className='title'>TIMELINE</h1>
      <div className='timeline-box'>
        <object
          data='/timeline-portfolio.svg'
          type='image/svg+xml'
          alt='timeline.svg'></object>
      </div>
    </div>
  );
};
export default Timeline;
