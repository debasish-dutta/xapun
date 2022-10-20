import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';
import Footer from "./components/Footer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Events from "./pages/events";
import Team from "./pages/team";
import Contribute from "./pages/contribute";

function App() {
  return (
    <BrowserRouter>
    {/* <Hlogo /> */}
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/team" element={<Team />}></Route>
    <Route path="/events" element={<Events />}></Route>
    <Route path="/contribute" element={<Contribute />}></Route>
    </Routes>
    {/* <Home /> */}
    <Footer />
  </BrowserRouter>
  );
}

export default App;
