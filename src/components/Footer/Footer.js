import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} Sabri Kradaoui — Développeur Fullstack
        </p>
        <p className="footer__made">
          Conçu & développé avec React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
