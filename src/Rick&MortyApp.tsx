import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar"
import { Home } from "./model/home/pages/home";
import { Character } from "./model/characters/pages/character";
import { Location } from "./model/locations/pages/location";
import { Episode } from "./model/episodes/pages/episode";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/episodes" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App