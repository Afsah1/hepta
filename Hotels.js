import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hotels.css';

function Hotels() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Hotels');
  const [currentHotelImage, setCurrentHotelImage] = useState(0);

  const hotelImages = [
    '/Images/carousel1.jpg',
    '/Images/carousel2.jpg',
    '/Images/carousel3.jpg',
    '/Images/carousel4.jpg',
    '/Images/carousel5.jpg',
    '/Images/carousel6.jpg',
  ];

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
    <div className="hotels-page-container">

      <div className="hero-container hotels-hero-container">
        <nav className="navbar">
          <div className="logo">Hepta</div>
          <div className="menu-icon" onClick={handleMenuClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        <div className="hero-text">
          <h1>Our Hotel</h1>
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

      <div className="hotels-cards-container">
        <div className="hotels-experience-card">
          <img src="/Images/food.svg" alt="Good Foods" className="hotels-card-image" />
          <h3 className="hotels-card-title">Good Foods</h3>
          <p className="hotels-card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>

        <div className="hotels-experience-card">
          <img src="/Images/travel.svg" alt="Travel Anywhere" className="hotels-card-image" />
          <h3 className="hotels-card-title">Travel Anywhere</h3>
          <p className="hotels-card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>

        <div className="hotels-experience-card">
          <img src="/Images/Airplane.svg" alt="Airplane" className="hotels-card-image" />
          <h3 className="hotels-card-title">Airplane</h3>
          <p className="hotels-card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
      </div>

      <div className="hotels-cards-container">
        <div className="hotels-experience-card">
          <img src="/Images/beach.svg" alt="Beach Resort" className="hotels-card-image" />
          <h3 className="hotels-card-title">Beach Resort</h3>
          <p className="hotels-card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>

        <div className="hotels-experience-card">
          <img src="/Images/mountain.svg" alt="Mountain Climbing" className="hotels-card-image" />
          <h3 className="hotels-card-title">Mountain Climbing</h3>
          <p className="hotels-card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>

        <div className="hotels-experience-card">
          <img src="/Images/hotair.svg" alt="Hot Air Balloon" className="hotels-card-image" />
          <h3 className="hotels-card-title">Hot Air Balloon</h3>
          <p className="hotels-card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
      </div>

      <div className="family-room-section">
        <div className="family-room-image">
          <img src="/Images/10021.jpg" alt="Family Room" />
        </div>
        <div className="family-room-content">
          <h2>Family Room</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <button className="family-room-button">LEARN MORE</button>
        </div>
      </div>

      <div className="presidential-room-section">
        <div className="presidential-room-content">
          <h2>Presidential Room</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <button className="presidential-room-button">LEARN MORE</button>
        </div>
        <div className="presidential-room-image">
          <img src="/Images/10009.webp" alt="Presidential Room" />
        </div>
      </div>

      <div className="hotel-gallery-section">
        <h2>Hotel Gallery</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
      </div>

      <div className="hotel-carousel-section">
        <div className="hotel-carousel-background"></div>

        <div className="hotel-carousel-container">
          <button
            className="hotel-carousel-arrow hotel-carousel-left"
            onClick={() => setCurrentHotelImage((currentHotelImage - 1 + hotelImages.length) % hotelImages.length)}
          >
            &#60;
          </button>

          <img src={hotelImages[currentHotelImage]} alt="Hotel Carousel" className="hotel-carousel-image" />

          <button
            className="hotel-carousel-arrow hotel-carousel-right"
            onClick={() => setCurrentHotelImage((currentHotelImage + 1) % hotelImages.length)}
          >
            &#62;
          </button>
        </div>

        <div className="hotel-carousel-dots-wrapper">
          <div className="hotel-carousel-dots">
            {hotelImages.map((_, index) => (
              <span
                key={index}
                className={`hotel-dot ${index === currentHotelImage ? 'hotel-active-dot' : ''}`}
                onClick={() => setCurrentHotelImage(index)}
              ></span>
            ))}
          </div>
    
        </div>
        
      </div>
      <div className="more-features-section">
  <h2 className="more-features-title">More Hotel Features</h2>
  <p className="more-features-description">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? 
    Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
  </p>
</div>

<div className="villa-reasons-section">
  <div className="villa-card">
    <img src="/Images/juice.jpg" alt="Villa Reason 1" className="villa-card-image-top" />
    <h3 className="villa-card-title-bottom">Five Reasons to Stay at Villa Resort</h3>
  </div>

  <div className="villa-card">
    <img src="/Images/boat.jpg" alt="Villa Reason 2" className="villa-card-image-top" />
    <h3 className="villa-card-title-bottom">Five Reasons to Stay at Villa Resort</h3>
  </div>

  <div className="villa-card">
    <img src="/Images/sofa.jpg" alt="Villa Reason 3" className="villa-card-image-top" />
    <h3 className="villa-card-title-bottom">Five Reasons to Stay at Villa Resort</h3>
  </div>
</div>

  {/* 🔷 Spacer */}
<div className="hotel-section-spacer"></div>
<div className="footer">
  <div className="footer-content">

    {/* 1️⃣ Quick Links */}
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

    {/* 2️⃣ Support */}
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

    {/* 3️⃣ Contact Info */}
    <div className="footer-column">
      <h3 className="footer-heading">Contact Info</h3>
      <p><strong>Address:</strong><br />98 West 21th Street, Suite 721<br />New York NY 10016</p>
      <p><strong>Phone:</strong><br />(+1) 435 3533</p>
      <p><strong>Email:</strong><br />info@yourdomain.com</p>
    </div>

    {/* 4️⃣ Subscribe */}
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
    <p>Copyright © 2025 All rights reserved | This template is made with 
      <span className="white-heart">&#10084;</span> by Colorlib
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

export default Hotels;
