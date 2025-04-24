import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./views/home";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const App = () => {

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }}
      />
    </div>
  );
};

export default App;
