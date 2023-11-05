import ScrollToTop from "./components/scrollCorrector/scroll.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import Home from "./pages/home";
import Flights from "./pages/flights";

import './main.css';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
      </Routes>

      <Footer />
      </ScrollToTop>
    </Router>
  );
}


export default App;
