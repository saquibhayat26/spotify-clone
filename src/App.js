import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./Pages/Favourites/Favourites";
import PlayList from "./Pages/PlayList/PlayList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-fav-music" element={<Favourites />} />
          <Route exact path="/play-list" element={<PlayList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
