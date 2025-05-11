import Navbar from "./component/Navbar";
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { People } from "./pages/People";
import { Calender } from "./pages/Calender";
import Asmita from "./pages/Asmita";
import Gallery from "./pages/Gallery";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/asmita" to="https://asmita.iiita.ac.in/" />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Asmita />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
