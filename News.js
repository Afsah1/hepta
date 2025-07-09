import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './News.css';  // Make sure you create News.css based on Gallery.css

function News() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('News');
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
    <div className="news-page-container">

      {/* 🔷 Hero Section */}
      <div className="hero-container news-hero-banner">
        <nav className="navbar">
          <div className="logo">Hepta</div>
          <div className="menu-icon" onClick={handleMenuClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        <div className="hero-text">
          <h1>Blog</h1>
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


      {/* 🔷 Blog Cards Section */}
<div className="news-cards-section">
  <div className="news-card">
    <img src="/Images/juice.jpg" alt="Blog 1" className="news-card-image" />
    <div className="news-card-text">
      <p className="news-card-date">February 26, 2018</p>
      <h4 className="news-card-title">Free Template by Colorlib</h4>
    </div>
  </div>

  <div className="news-card">
    <img src="/Images/boat.jpg" alt="Blog 2" className="news-card-image" />
    <div className="news-card-text">
      <p className="news-card-date">February 26, 2018</p>
      <h4 className="news-card-title">Free Template by Colorlib</h4>
    </div>
  </div>

  <div className="news-card search-card">
    <div className="search-card-content">
      <i className="fa fa-search search-icon"></i>
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
  </div>
</div>

<div className="news-cards-section">

  {/* Two Blog Cards */}
  <div className="news-card">
    <img src="/Images/juice.jpg" alt="Blog 1" className="news-card-image" />
    <div className="news-card-text">
      <p className="news-card-date">February 26, 2018</p>
      <h4 className="news-card-title">Free Template by Colorlib</h4>
    </div>
  </div>

  <div className="news-card">
    <img src="/Images/boat.jpg" alt="Blog 2" className="news-card-image" />
    <div className="news-card-text">
      <p className="news-card-date">February 26, 2018</p>
      <h4 className="news-card-title">Free Template by Colorlib</h4>
    </div>
  </div>

  {/* Popular Posts Card */}
  <div className="popular-post-card">
    <h3 className="popular-post-heading">Popular Post</h3>

    <div className="popular-post-item">
      <img src="/Images/juice.jpg" alt="Post 1" className="popular-post-image" />
      <div className="popular-post-text">
        <p className="popular-post-date">February 27, 2018</p>
        <h5 className="popular-post-title">Free Template by Colorlib</h5>
      </div>
    </div>

    <div className="popular-post-item">
      <img src="/Images/boat.jpg" alt="Post 2" className="popular-post-image" />
      <div className="popular-post-text">
        <p className="popular-post-date">February 27, 2018</p>
        <h5 className="popular-post-title">Free Template by Colorlib</h5>
      </div>
    </div>

    <div className="popular-post-item">
      <img src="/Images/juice.jpg" alt="Post 3" className="popular-post-image" />
      <div className="popular-post-text">
        <p className="popular-post-date">February 27, 2018</p>
        <h5 className="popular-post-title">Free Template by Colorlib</h5>
      </div>
    </div>
   <div className="popular-post-item">
      <img src="/Images/boat.jpg" alt="Post 3" className="popular-post-image" />
      <div className="popular-post-text">
        <p className="popular-post-date">February 27, 2018</p>
        <h5 className="popular-post-title">Free Template by Colorlib</h5>
      </div>
    </div>
       <div className="popular-post-item">
      <img src="/Images/sofa.jpg" alt="Post 3" className="popular-post-image" />
      <div className="popular-post-text">
        <p className="popular-post-date">February 27, 2018</p>
        <h5 className="popular-post-title">Free Template by Colorlib</h5>
      </div>
    </div>
  </div>

</div>
<div className="news-cards-section">
  {/* Blog Card 1 */}
  <div className="news-card">
    <img src="/Images/juice.jpg" alt="Blog 1" className="news-card-image" />
    <div className="news-card-text">
      <p className="news-card-date">February 26, 2018</p>
      <h4 className="news-card-title">Free Template by Colorlib</h4>
    </div>
  </div>

  {/* Blog Card 2 */}
  <div className="news-card">
    <img src="/Images/boat.jpg" alt="Blog 2" className="news-card-image" />
    <div className="news-card-text">
      <p className="news-card-date">February 26, 2018</p>
      <h4 className="news-card-title">Free Template by Colorlib</h4>
    </div>
  </div>

  {/* Categories Card */}
  <div className="categories-card">
    <h3 className="categories-heading">Categories</h3>
    <ul className="categories-list">
      <li><span className="category-name">Events</span> <span className="category-count">(12)</span></li>
      <li><span className="category-name">Resto bar</span> <span className="category-count">(4)</span></li>
      <li><span className="category-name">Celebration</span> <span className="category-count">(23)</span></li>
      <li><span className="category-name">Promos</span> <span className="category-count">(8)</span></li>
    </ul>
  </div>
</div>
<div className="pagination-section">
  <div className="pagination-circle active">1</div>
  <div className="pagination-circle">2</div>
  <div className="pagination-circle">3</div>
</div>

{/* 🔷 Spacer */}
<div className="news-section-spacer"></div>



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

export default News;
