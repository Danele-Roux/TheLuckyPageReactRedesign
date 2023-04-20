import './App.css';
import Navigation from './components/navigation';
import Hero from './components/hero'
import ForBuyers from './components/forBuyers'
import ForSellers from './components/ForSellers';
import RequestDemo from './components/_requestDemo';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <ForBuyers />
      <ForSellers />
      <RequestDemo />
      <Footer />
    </div>
  );
}

export default App;
