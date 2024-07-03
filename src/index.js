import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Test, Learn, Stats } from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  </BrowserRouter>
);
