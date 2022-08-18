import { Carousel, Destination, Navigation, Footer } from '../component';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Carousel />
        <Destination />
      </main>
      <Footer />
    </>
  );
}

export default App;