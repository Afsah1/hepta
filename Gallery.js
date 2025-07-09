import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

function Gallery() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Gallery');
  const navigate = useNavigate();

  const handleMenuClick = () => setMenuOpen(true);
  const handleCloseClick = () => setMenuOpen(false);

  const handleLinkClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    if (page === 'Home') {
      navigate('/');
    } else {
      navigate(`/${page.replace(/\s+/g, '').toLowerCase()}`);
    }
  };

  return (
    <div className="gallery-page-container">

    {/* 🔷 Hero Section */}
<div className="hero-container gallery-hero-banner">
  <nav className="navbar">
    <div className="logo">Hepta</div>
    <div className="menu-icon" onClick={handleMenuClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>

  <div className="hero-text">
    <h1>Gallery</h1>
    <p>
      A free template by{' '}
      <a
        href="https://preview.colorlib.com/theme/hepta/index.html#"
        target="_blank"
        rel="noopener noreferrer"
        className="colorlib"
      >
        Colorlib
      </a>. Download and share!
    </p>
  </div>

  {menuOpen && (
    <div className="menu-overlay">
      <div className="menu-close" onClick={handleCloseClick}>X</div>
      <ul className="menu-links">
        {['Home', 'Hotels', 'About Us', 'Gallery', 'News', 'Contact'].map((page) => (
          <li
            key={page}
            onClick={() => handleLinkClick(page)}
            className={activePage === page ? 'active-link' : ''}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

{/* 🔷 Image Grid Section */}
<div className="gallery-image-grid">
  <div className="gallery-image-item">
    <img src="/Images/juice.jpg" alt="Juice" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/boat.jpg" alt="Boat" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/sofa.jpg" alt="Sofa" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/mountain.jpg" alt="Mountain" />
  </div>
</div>
{/* 🔷 Second Image Grid Section */}
<div className="gallery-image-grid">
  <div className="gallery-image-item">
    <img src="/Images/sofa.jpg" alt="Sofa" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/mountain.jpg" alt="Mountain" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/juice.jpg" alt="Juice" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/boat.jpg" alt="Boat" />
  </div>
</div>

{/* 🔷 Third Row: 2 Larger Images */}
<div className="gallery-image-grid-large">
  <div className="gallery-image-item-large">
    <img src="/Images/juice.jpg" alt="Juice Large" />
  </div>
  <div className="gallery-image-item-large">
    <img src="/Images/boat.jpg" alt="Boat Large" />
  </div>
</div>

{/* 🔷 4th Image Grid Section */}
<div className="gallery-image-grid">
  <div className="gallery-image-item">
    <img src="/Images/sofa.jpg" alt="Sofa" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/mountain.jpg" alt="Mountain" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/juice.jpg" alt="Juice" />
  </div>
  <div className="gallery-image-item">
    <img src="/Images/boat.jpg" alt="Boat" />
  </div>
</div>
{/* 🔷 Spacer */}
<div className="gallery-section-spacer"></div>

      {/* 🔷 Footer */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-heading">Quick Link</h3>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
              <li>Rooms</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li>Our Location</li>
              <li>The Hosts</li>
              <li>About</li>
              <li>Contact</li>
              <li>Restaurant</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Info</h3>
            <p><strong>Address:</strong><br />98 West 21th Street, Suite 721<br />New York NY 10016</p>
            <p><strong>Phone:</strong><br />(+1) 435 3533</p>
            <p><strong>Email:</strong><br />info@yourdomain.com</p>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Subscribe</h3>
            <p>Sign up for our newsletter</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Your email..." className="footer-input" />
              <button type="submit" className="footer-submit-button">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 All rights reserved |
            This template is made with <span className="white-heart">&#10084;</span> by Colorlib
          </p>
          <div className="footer-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-youtube"></i>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Gallery;
