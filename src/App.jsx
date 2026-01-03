import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Noticias } from './pages/Noticias';
import { Mortalidad } from './pages/Mortalidad';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/mortandad" element={<Mortalidad />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
