import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Flights, Home, Info, Support } from './routes';
import { Footer, Navbar } from './components';

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/flights" Component={Flights} />
        <Route path="/info" Component={Info} />
        <Route path="/support" Component={Support} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
