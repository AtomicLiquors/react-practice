import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import "./index.css";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
