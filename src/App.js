import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Home from "./components/Home";
import Cards from "./components/cards";
import Certified from "./components/certified";
import Review from "./components/Review";
//import SMS from "./components/SMS";
import Assessment from "./components/Assesment";
import Footer from "./components/Footer";
import Platform from "./components/PlatForm";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Cards />
                <Certified />
                <Review />
                <Assessment />
              </>
            }
          />

          <Route
            path="/platform"
            element={
              <>
                <Platform />
                <Trust />
              </>
            }
          />

          <Route path="/pricing" element={
            <>
            <Pricing />
            </>
          } />

          <Route path="/contact" element={
            <>
            <Contact/>
            </>
          } />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
