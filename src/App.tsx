import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { HeroSection } from "./components/sections/hero-section";
import { InfoSection } from "./components/sections/info-section";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
