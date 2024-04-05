// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Home from "./Routes/Home";
// import MyForm from "./Routes/MyForm";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
