import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./main-pages/Home";
import About from "./main-pages/About";
import Projects from "./main-pages/Projects";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
