// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/Header';
import Array from './components/Array';
import NestedArray from './components/NestedArray'
import Question from './components/Question'
import Api1 from './components/Api1'
// import car from "./assets/images/car.jpg"

function App() {

  const name1 = "Hello World"

  return (
   <>
      My first Const {name1}
      
      <Header />
      

      <Array/>

      <NestedArray/>
      
      <Question/>

      
          
   </>
  );
}

export default App;
