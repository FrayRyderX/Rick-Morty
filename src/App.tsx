import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App