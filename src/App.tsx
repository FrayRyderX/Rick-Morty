import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Home />
    </div>
  )
}

export default App