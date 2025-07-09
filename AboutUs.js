import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('About Us');
  const [currentImage, setCurrentImage] = useState(0);

  const navigate = useNavigate();

  const images = [
    '/Images/carousel1.jpg',
    '/Images/carousel2.jpg',
    '/Images/carousel3.jpg',
    '/Images/carousel4.jpg',
    '/Images/carousel5.jpg',
    '/Images/carousel6.jpg',
  ];

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
    <div className="aboutus-page-container">

      {/* 🔷 Hero Section */}
      <div className="hero-container aboutus-hero-container">
        <nav className="navbar">
          <div className="logo">Hepta</div>
          <div className="menu-icon" onClick={handleMenuClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        <div className="hero-text">
          <h1>About Us</h1>
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

      {/* 🔷 Welcome Section */}
      <div className="aboutus-info-section">
        <div className="aboutus-info-image">
          <img src="/Images/10021.jpg" alt="Travel and Tours" />
        </div>
        <div className="aboutus-info-text">
          <h2>Welcome Travel & Tours</h2>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
            a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button className="aboutus-learn-more-button">LEARN MORE</button>
        </div>
      </div>

      {/* 🔷 Hotel Gallery */}
      <div className="aboutus-hotel-gallery">
        <h2>Hotel Gallery</h2>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
          a large language ocean.
        </p>
      </div>

      {/* 🔷 Image Carousel */}
      <div className="aboutus-carousel-section">
        <div className="aboutus-carousel-container">
          <button
            className="aboutus-carousel-arrow left"
            onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
          >
            &#60;
          </button>

          <img
            src={images[currentImage]}
            alt="Carousel"
            className="aboutus-carousel-image"
          />

          <button
            className="aboutus-carousel-arrow right"
            onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          >
            &#62;
          </button>
        </div>

        <div className="aboutus-carousel-dots-wrapper">
          <div className="aboutus-carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? 'active-dot' : ''}`}
                onClick={() => setCurrentImage(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      {/* 🔷 Team Section */}
<div className="aboutus-team-section">
  <h2>Team</h2>
  <p>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
    a large language ocean.
  </p>
</div>
{/* 🔷 Team Member Cards Section */}
<div className="aboutus-team-cards">
  <div className="team-card">
    <img src="/Images/customer3.jpg" alt="CEO" className="team-card-image" />
    <div className="team-card-text">
      <h4>CEO, Co-Founder</h4>
      <p>Vince Richardson</p>
    </div>
  </div>

  <div className="team-card">
    <img src="/Images/customer1.jpg" alt="CTO" className="team-card-image" />
    <div className="team-card-text">
      <h4>CTO, Co-Founder</h4>
      <p>Jean Love</p>
    </div>
  </div>

  <div className="team-card">
    <img src="/Images/customer2.jpg" alt="Marketer" className="team-card-image" />
    <div className="team-card-text">
      <h4>Marketer, Co-Founder</h4>
      <p>Jeff Stark</p>
    </div>
  </div>
</div>

<div className="aboutus-team-cards">
  <div className="team-card">
    <img src="/Images/customer3.jpg" alt="CEO" className="team-card-image" />
    <div className="team-card-text">
      <h4>CEO, Co-Founder</h4>
      <p>Vince Richardson</p>
    </div>
  </div>

  <div className="team-card">
    <img src="/Images/customer1.jpg" alt="CTO" className="team-card-image" />
    <div className="team-card-text">
      <h4>CTO, Co-Founder</h4>
      <p>Jean Love</p>
    </div>
  </div>

  <div className="team-card">
    <img src="/Images/customer2.jpg" alt="Marketer" className="team-card-image" />
    <div className="team-card-text">
      <h4>Marketer, Co-Founder</h4>
      <p>Jeff Stark</p>
    </div>
  </div>
</div>


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

export default AboutUs;
