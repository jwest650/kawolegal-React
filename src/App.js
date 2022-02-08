import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navar from "./components/Navar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Startup from "./pages/Startup";
function App() {
    return (
        <div className="relative">
            <BrowserRouter>
                <Navar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="startup" element={<Startup />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
