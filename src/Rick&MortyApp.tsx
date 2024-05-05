import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar"
import { Home } from "./pages/home";
import { Character } from "./pages/character";
import { Location } from "./pages/location";
import { Episode } from "./pages/episode";

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