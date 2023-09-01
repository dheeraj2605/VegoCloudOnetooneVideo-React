import React from 'react';
import {BrowserRouter , Route, Routes } from 'react-router-dom'; // Corrected import
import Home from './Components/Home';
import Room from './Components/Room';

function App() {
   return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/room/:roomID' element={<Room/>} />
    </Routes>
    </BrowserRouter>
   );
}

export default App;
