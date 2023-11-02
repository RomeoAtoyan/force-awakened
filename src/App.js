import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
