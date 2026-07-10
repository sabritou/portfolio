import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        <a href="#accueil" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-dot" />
          SK
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          <li className="navbar__links-cta">
            <a
              href={`${process.env.PUBLIC_URL}/cvsabridev.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={closeMenu}
            >
              Mon CV
            </a>
          </li>
        </ul>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
