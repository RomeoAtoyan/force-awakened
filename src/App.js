import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Characters from "./pages/Characters";
import { AppDataProvider } from "./Context/ApiData";
import CharacterId from "./pages/CharacterId";

const App = () => {
  return (
    <>
      <AppDataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterId />} />
          </Routes>
        </Router>
      </AppDataProvider>
    </>
  );
};

export default App;
