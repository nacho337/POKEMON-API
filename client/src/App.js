import React from 'react'; // Make sure you import React

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./views/home/home.component";
import Detail from "./views/detail/detail.component";
import Create from "./views/create/create.component";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter> 

  );
}

export default App;