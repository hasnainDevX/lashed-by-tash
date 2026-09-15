import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;