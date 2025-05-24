import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./views/home";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Events from "./views/event";
import About from "./views/about";
import DirectorsMessage from "./views/about/directorsMessage";
import BscNursingPage from "./views/courses/course-details/BscNursingPage";
import Faculty from "./views/faculty";
import Result from "./views/result";
import PrincipleMessage from "./views/about/principleMessage";
import ChairmanMessage from "./views/about/chairmanMessage";
import Course from "./views/courses";
import Contact from "./views/contact";
const App = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center">
      <Navbar />
      <div className="max-w-7xl md:w-11/12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/directorsmessage" element={<DirectorsMessage />} />
          <Route path="/bscnursing" element={<BscNursingPage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/principleMessage" element={<PrincipleMessage />} />
          <Route path="/chairmanMessage" element={<ChairmanMessage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/result" element={<Result/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
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
