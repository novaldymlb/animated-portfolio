import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='logo'>
          <a href='/'>
            NO<span>VAL</span>
          </a>
        </div>
        <div className='anchor'>
          <a href='#About'>
            ABOUT
          </a>
          <a href='#Projects'>
            PROJECTS
          </a>
          <a href='#Contact'>CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
