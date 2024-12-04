import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  
  return (
    <BrowserRouter>
            {/* <Navbar /> */}
            <div>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/Annamitra" />} /> */}
                    {/* <Route path="/Annamitra" element={<Annamitra />} /> */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/LogIn" element={<Login />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </BrowserRouter>
  )
}

export default App
