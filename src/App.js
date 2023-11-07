import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { AppDataProvider } from "./Context/ApiData";
import CharacterId from "./pages/CharacterId";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesId from "./pages/MoviesId";
import NotFound from "./pages/NotFound";
import R2D2 from "./pages/R2D2";

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
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MoviesId />} />
            <Route path="game" element={<R2D2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AppDataProvider>
    </>
  );
};

export default App;
