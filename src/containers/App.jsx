import { useState } from 'react';
import Header from '../components/NavBar/Header';
import Footer from '../components/Footer';
import ContentContainer from './ContentContainer';
import Team from './Team';
import MobileLinks from '../components/NavBar/MobileLinks';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="App">
      <Header isOpen={isOpen} setOpen={setOpen} />
      {isOpen && <MobileLinks setOpen={setOpen} isOpen={isOpen} />}
      <ContentContainer />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
