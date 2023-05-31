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
          <Route exact path="/about" element={<About />}>
            {/* <About /> */}
          </Route>
          <Route exact path="/" element={<TextForm/>}>
          {/* <TextForm /> */}
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
