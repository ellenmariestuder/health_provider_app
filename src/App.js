import React, { useState } from 'react';
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// screens
// import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import View1 from './components/View1/View1';
import View2 from './components/View2/View2';


function App(props) {
  const [name, setName] = useState('');
  
  return (

    <Router>
    <div className="App">
        {/* <Navbar /> */}
      <Routes>
      {/* <Route exact path='/' element={<Welcome name={name}/>} /> */}
      <Route exact path='/' element={<Welcome setName={setName} name={name}/>} />
      {/* <Route exact path='/' element={<Welcome setName={setName} name={e => setName(", " + e.target.value)}/>} /> */}
      <Route exact path='/view1' element={<View1 name={name}/>} />
      <Route exact path='/view2' element={<View2 />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
