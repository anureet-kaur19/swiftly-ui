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


// swiftly/
// │
// ├── public/
// │   ├── index.html                  
// │   ├── favicon.ico                 
// │   └── assets/                     
// │       ├── images/
// │       └── fonts/
// │
// ├── src/
// │   ├── components/                 
// │   │   ├── Header.tsx              
// │   │   ├── Footer.tsx              
// │   │   └── ...                     
// │   │
// │   ├── pages/                      
// │   │   ├── Home.tsx                
// │   │   ├── User.tsx                
// │   │   ├── Account.tsx             
// │   │   ├── Transaction.tsx          
// │   │   └── Report.tsx              
// │   │
// │   ├── services/                   
// │   │   ├── UserService.ts          
// │   │   ├── AccountService.ts       
// │   │   ├── TransactionService.ts    
// │   │   └── ReportService.ts        
// │   │
// │   ├── hooks/                      
// │   │   ├── useFetch.ts             
// │   │   └── ...
// │   │
// │   ├── context/                    
// │   │   ├── UserContext.tsx         
// │   │   └── ...
// │   │
// │   ├── styles/                     
// │   │   ├── App.css                 
// │   │   └── variables.css           
// │   │
// │   ├── utils/                      
// │   │   ├── formatDate.ts           
// │   │   └── ...
// │   │
// │   ├── App.tsx                     
// │   ├── index.tsx                   
// │   ├── reportWebVitals.ts          
// │   └── tests/                      # Test directory
// │       ├── components/             
// │       │   ├── Header.test.tsx     # Test for Header component
// │       │   ├── Footer.test.tsx     # Test for Footer component
// │       │   └── ...                 
// │       │
// │       ├── pages/                  
// │       │   ├── Home.test.tsx       # Test for Home page
// │       │   └── ...                 
// │       │
// │       ├── services/               
// │       │   ├── UserService.test.ts  # Test for UserService
// │       │   └── ...                 
// │       │
// │       └── utils/                 
// │           ├── formatDate.test.ts   # Test for formatDate utility
// │           └── ...
// │
// ├── .gitignore                      
// ├── package.json                    
// ├── tsconfig.json                   
// └── yarn.lock / package-lock.json   
