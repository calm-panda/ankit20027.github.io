import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-400 bg-dotted-spacing-7 bg-dotted-zinc-800">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
