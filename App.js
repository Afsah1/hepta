import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Hotels from './components/Hotels';
import AboutUs from './components/AboutUs'; 
import Gallery from './components/Gallery'; 
import News from './components/News'; 
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} /> 
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
