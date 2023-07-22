import "./App.css";
import CTASection from "./components/CTASection";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </div>
  );
}

export default App;
