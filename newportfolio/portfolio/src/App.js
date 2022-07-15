import NavBar from './components/NavBar';
import Home from './components/Home';
import Particles from './components/Particles';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer/>
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;

