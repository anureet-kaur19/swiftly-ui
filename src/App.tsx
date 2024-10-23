import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import User from './pages/User';
import Account from './pages/Account';
import Transaction from './pages/Transaction';
import Report from './pages/Report';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/accounts" element={<Account />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/reports" element={<Report />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
