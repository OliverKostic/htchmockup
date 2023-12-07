import React from "react";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import MainContentLayout from "./routes/MainContentLayout";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="main-content">
          <MainContentLayout />
        </div>
      </Router>
    </div>
  );
};

export default App;
