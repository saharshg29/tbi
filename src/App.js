import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Incubation from "./components/Incubation";
import Facility from "./components/Facility";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Home";
import Nav from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/incubation" element={<Incubation />}></Route>
        <Route path="/facility" element={<Facility />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
