import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Foooter";

function App() {
  return (
      <div>
        <NavBar/>
        <MainContent/>
        <Footer/>
      </div>
  );
}

export default App;
