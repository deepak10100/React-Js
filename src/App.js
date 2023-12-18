import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import './styles/Home.css'

function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
     </Router>
    </>
  );
}

export default App;
