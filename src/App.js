import React, { useState } from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Todolist from "./views/Todolist";


function App() {

  
  
  
  return (
    <Router>
      <Nav />
      <div>
      <UserAuthContextProvider>
      <Routes>
      

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todos" element={<Todolist />} />
      </Routes>
      </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
