import './navbar.scss';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let lastActiveSection = ''; // Menyimpan nilai active section sebelumnya

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      // Update hanya jika ada perubahan pada activeSection
      if (current && current !== lastActiveSection) {
        setActiveSection(current);
        lastActiveSection = current;
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== lastActiveSection) {
        setActiveSection(hash);
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        lastActiveSection = hash;
      }
    };

    // Panggil handler saat komponen dimuat pertama kali
    handleScroll();
    handleHashChange();

    // Tambahkan event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      // Hapus event listener hanya jika aktif section berubah
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='logo'>
          <a href='/'>
            NO<span>VAL</span>
          </a>
        </div>
        <div className='anchor'>
          <a href='#About' className={activeSection === 'About' ? 'active' : ''}>
            ABOUT
          </a>
          <a href='#Projects' className={activeSection === 'Projects' ? 'active' : ''}>
            PROJECTS
          </a>
          <a href='#Contact' className={activeSection === 'Contact' ? 'active' : ''}>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
