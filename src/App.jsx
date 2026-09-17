import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';
import Policy from './pages/Policy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/booking" element={<BookPage />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
}

export default App;