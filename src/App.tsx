import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./pages/home";
import { Character } from "./pages/character";
import { Location } from "./pages/location";
import { Episode } from "./pages/episode";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* 
        <Home />
        <Character />
        <Location />
        <Episode />
      */}
    </div>
  )
}

export default App