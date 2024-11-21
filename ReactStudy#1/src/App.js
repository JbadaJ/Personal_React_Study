import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Page1 from './pages/Page1';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
      <Router>
          <div>
            <Header />
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/page1" element={<Page1 />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
