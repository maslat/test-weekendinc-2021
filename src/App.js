import './App.css';
import ContentSection from './components/ContentSection';
import DefSection from './components/DefSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DefSection />
      <ContentSection />
      <Footer />
    </>
  );
}

export default App;
