import React from 'react';
import logo from './logo.svg';
import './custom.css';
import Header from './components/constants/header';
import Footer from './components/constants/footer';
import Home from './components/views/home';
import About from './components/views/about';
import Contact from './components/views/contact';
import Calculator from './components/views/calculator';
import Login from './components/views/login';
import Signup from './components/views/signup';

function App() {
  return (
    <div className="App">
      <Header/>
         <Home/>
      <Footer/>
    </div>
  );
}

export default App;
