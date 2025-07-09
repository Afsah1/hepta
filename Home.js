import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
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
    if (page === 'Home') navigate('/');           // ✅ Navigate to home page
    if (page === 'Hotels') navigate('/hotels');
  };

  const backgroundStyle = {
    backgroundImage: `url('/Images/10021.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(90%)',
    position: 'relative',
    height: '100vh',
    width: '100%',
    color: 'white',
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container" style={backgroundStyle}>
        <nav className="navbar">
          <div className="logo">Hepta</div>
          <div className="menu-icon" onClick={handleMenuClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        <div className="hero-text">
          <h1>Travel & Tours</h1>
          <p>
            <p>
  A free template by <a href="https://preview.colorlib.com/theme/hepta/index.html#" 
  target="_blank" rel="noopener noreferrer" className="colorlib">Colorlib</a>. Download and share!
</p>

          </p>
          <button className="visit-btn">VISIT COLORLIB</button>
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

      {/* Image and Text Section */}
      <div className="image-text-section">
        <div className="image-column">
          <img src="/Images/10009.webp" alt="Travel" />
        </div>
        <div className="text-column">
          <h2>Welcome To Our Website</h2>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
            a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <button className="visit-btn">
            <span className="icon-circle">
              <FaPlay />
            </span>
            Watch The Video
          </button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2 className="experience-heading">Experience Once In Your Life Time</h2>
        <p className="experience-subtext">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
          a large language ocean.
        </p>

        <div className="cards-container">
          <div className="experience-card">
            <img src="/Images/food.svg" alt="Good Foods" className="card-image" />
            <h3 className="card-title">Good Foods</h3>
            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>

          <div className="experience-card">
            <img src="/Images/travel.svg" alt="Travel Anywhere" className="card-image" />
            <h3 className="card-title">Travel Anywhere</h3>
            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>

          <div className="experience-card">
            <img src="/Images/Airplane.svg" alt="Airplane" className="card-image" />
            <h3 className="card-title">Airplane</h3>
            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
        </div>

        <div className="cards-container">
          <div className="experience-card">
            <img src="/Images/beach.svg" alt="Beach Resort" className="card-image" />
            <h3 className="card-title">Beach Resort</h3>
            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>

          <div className="experience-card">
            <img src="/Images/mountain.svg" alt="Mountain Climbing" className="card-image" />
            <h3 className="card-title">Mountain Climbing</h3>
            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>

          <div className="experience-card">
            <img src="/Images/hotair.svg" alt="Hot Air Balloon" className="card-image" />
            <h3 className="card-title">Hot Air Balloon</h3>
            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
        </div>

        {/* International Tour Management Section */}
        <div className="tour-management-section">
          <h2 className="tour-heading">International Tour Management.</h2>
          <p className="tour-subtext">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
            a large language ocean.
          </p>
        </div>
<div className="carousel-section">
  <div className="carousel-background-slope"></div>  {/* ✅ Blue Slope */}

  <div className="carousel-container">
    <button
      className="carousel-arrow left"
      onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
    >
      &#60;
    </button>

    <img src={images[currentImage]} alt="Carousel" className="carousel-image" />

    <button
      className="carousel-arrow right"
      onClick={() => setCurrentImage((currentImage + 1) % images.length)}
    >
      &#62;
    </button>
  </div>

  <div className="carousel-dots-wrapper">
    <div className="carousel-dots">
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
 
<div className="recent-blog-section">
  <h2 className="recent-blog-heading">Recent Blog Post</h2>
  <p className="recent-blog-text">
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
    a large language ocean.
  </p>
</div>

<div className="recent-blog-cards-container">
  <div className="recent-blog-card">
    <img src="/Images/juice.jpg" alt="Blog 1" className="blog-image" />
    <p className="blog-date">February 26, 2018</p>
    <h3 className="blog-title">45 Best Places To Unwind</h3>
    <p className="blog-text">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
      there live the blind texts.
    </p>
  </div>

  <div className="recent-blog-card">
    <img src="/Images/boat.jpg" alt="Blog 2" className="blog-image" />
    <p className="blog-date">February 26, 2018</p>
    <h3 className="blog-title">45 Best Places To Unwind</h3>
    <p className="blog-text">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
      there live the blind texts.
    </p>
  </div>

  <div className="recent-blog-card">
    <img src="/Images/sofa.jpg" alt="Blog 3" className="blog-image" />
    <p className="blog-date">February 26, 2018</p>
    <h3 className="blog-title">45 Best Places To Unwind</h3>
    <p className="blog-text">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
      there live the blind texts.
    </p>
  </div>
</div>


<div className="happy-customers-section">
  <h2 className="happy-customers-heading">Happy Customers</h2>

  <div className="testimonials-container">
    
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src="/Images/customer1.jpg" alt="Customer 1" />
      </div>
      <div className="testimonial-text">
        <p className="testimonial-quote">
          “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
          a large language ocean.”
        </p>
        <p className="testimonial-name">— Clare Gupta</p>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src="/Images/customer2.jpg" alt="Customer 2" />
      </div>
      <div className="testimonial-text">
        <p className="testimonial-quote">
          “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
          a large language ocean.”
        </p>
        <p className="testimonial-name">— Rogie Slater</p>
      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src="/Images/10020.jpg" alt="Customer 3" />
      </div>
      <div className="testimonial-text">
        <p className="testimonial-quote">
          “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
          a large language ocean.”
        </p>
        <p className="testimonial-name">— John Doe</p>
      </div>
    </div>

  <div className="top-destination-section">
  <h2 className="top-destination-heading">Top Destination</h2>
  <p className="top-destination-text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet?
    Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
  </p>

  <div className="destination-cards-container">

    <div className="destination-card">
      <img src="/Images/juice.jpg" alt="Food & Wines" className="destination-image" />
      <h3 className="destination-title">Food & Wines</h3>
      <div className="stars">
        <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
      </div>
      <p className="destination-reviews">3,239 reviews</p>
    </div>

    <div className="destination-card">
      <img src="/Images/boat.jpg" alt="Resort & Spa" className="destination-image" />
      <h3 className="destination-title">Resort & Spa</h3>
      <div className="stars">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
      <p className="destination-reviews">4,921 reviews</p>
    </div>

    <div className="destination-card">
      <img src="/Images/sofa.jpg" alt="Hotel Rooms" className="destination-image" />
      <h3 className="destination-title">Hotel Rooms</h3>
      <div className="stars">
        <FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
      </div>
      <p className="destination-reviews">2,112 reviews</p>
    </div>

    <div className="destination-card">
      <img src="/Images/10022.jpg" alt="Mountain Climbing" className="destination-image" />
      <h3 className="destination-title">Mountain Climbing</h3>
      <div className="stars">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
      </div>
      <p className="destination-reviews">6,421 reviews</p>
    </div>

  </div>
</div>

  </div>
</div>

{/* Footer Section */}
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
      <p><em>Address:</em><br />98 West 21th Street, Suite 721<br />New York NY 10016</p>
      <p><em>Phone:</em><br />(+1) 435 3533</p>
      <p><em>Email:</em><br />info@yourdomain.com</p>
    </div>

    <div className="footer-column">
      <h3 className="footer-heading">Subscribe</h3>
      <p>Sign up for our newsletter</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Your email..." />
        <button type="submit"><i className="fa fa-paper-plane"></i></button>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>Copyright © 2025 All rights reserved | This template is made with <span className="heart">♥</span> by Colorlib</p>
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
    </div>
  );
}

export default Home;
