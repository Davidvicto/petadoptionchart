import React, { Component } from 'react'; 
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

class App extends Component{
  render(){
  return (
    <div className="App">
  <Router>
    <Navbar />
    {/*<ImagePet />
    <SearchBar />
    <PetChart />
    <PetInfo/>
    <PetChart2 />
  <Logo />*/}
    <Routes>
      <Route path='/' />
    </Routes>
  </Router>
  </div>

  );
}
}

export default App;
