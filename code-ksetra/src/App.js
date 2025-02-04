import React from "react";
import "./index.css";
import About from "./Components/About";
import CombinedLogin from "./Components/CombinedLogin";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Page from "./Components/Page";
import Contact from "./Components/Contact";
import ErrorBoundary from "./Components/ErrorBoundary";
import Navbar from "./Components/Navbar";
import Market from "./Components/Market";


function App  () {
  return (
    <>
    <div className="App">

      {/* <Page/> */}
      <Navbar/>
      

      <ErrorBoundary>
       <Routes>
       <Route path="/my-app" element={<Page/>}/>
       <Route path="/my-app/login" element={<CombinedLogin/>}/>
       <Route path="/my-app/about" element={<About/>}/>

       <Route path="/my-app/contact" element={<Contact/>}/>

       <Route path="/my-app/market" element={<Market/>}/>
      
       </Routes>

       </ErrorBoundary>

      </div>
    </>
  
  );
};

export default App;