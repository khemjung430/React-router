import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="">
      <header className="App-header">
          {/* <h1 style ={{textAlign: "center" }}>React Router Dom</h1> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>

 
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
 </Routes>
    </div>
  );
}

export default App;
