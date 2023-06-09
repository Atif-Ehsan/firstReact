import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />}>
            {/* <About /> */}
          </Route>
          <Route path="/" element={<TextForm/>}>
          {/* <TextForm /> */}
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
