import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import CountryInfo from "./components/pages/CountryInfo";

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};
const App = () => {
  return (
    <div className="App" data-testid="app">
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<CountryInfo />} />
          </Routes>
          <LocationDisplay />
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
