import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';  // ✅ Create this CSS file based on Gallery.css

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Contact');
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
    <div className="contact-page-container">

      {/* 🔷 Hero Section */}
      <div className="hero-container contact-hero-banner">
        <nav className="navbar">
          <div className="logo">Hepta</div>
          <div className="menu-icon" onClick={handleMenuClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        <div className="hero-text">
          <h1>Contact</h1>
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

<div className="contact-content-section">

  {/* 🔹 Contact Form Card (Left) */}
  <div className="contact-form-card">
    <form>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input type="text"  />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text"  />
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email"  />
      </div>

      <div className="form-group">
        <label>Write Message</label>
        <textarea ></textarea>
      </div>

      <button type="submit" className="send-message-button">Send Message</button>
    </form>
  </div>

  {/* 🔹 Contact Info Card (Right) */}
  <div className="contact-info-card">
    <p className="info-label">ADDRESS:</p>
    <p className="info-text"><strong>98 West 21th Street, Suite<br />721 New York NY 10016</strong></p>

    <p className="info-label">PHONE:</p>
    <p className="info-text"><strong>(+1) 435 3533</strong></p>

    <p className="info-label">EMAIL:</p>
    <p className="info-text"><strong>info@yourdomain.com</strong></p>
  </div>

</div>
<div className="news-customers-section">
  <h2 className="news-customers-heading">Happy Customers</h2>

  <div className="news-testimonials-container">

    <div className="news-testimonial-card">
      <div className="news-testimonial-image">
        <img src="/Images/customer1.jpg" alt="Customer 1" />
      </div>
      <p className="news-testimonial-text">
        “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
      </p>
      <p className="news-testimonial-author">— Clare Gupta</p>
    </div>

    <div className="news-testimonial-card">
      <div className="news-testimonial-image">
        <img src="/Images/customer2.jpg" alt="Customer 2" />
      </div>
      <p className="news-testimonial-text">
        “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
      </p>
      <p className="news-testimonial-author">— Rogie Slater</p>
    </div>

    <div className="news-testimonial-card">
      <div className="news-testimonial-image">
        <img src="/Images/customer3.jpg" alt="Customer 3" />
      </div>
      <p className="news-testimonial-text">
        “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
      </p>
      <p className="news-testimonial-author">— John Doe</p>
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

export default Contact;

