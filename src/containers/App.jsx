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
      {!isOpen && <ContentContainer />}
      {!isOpen && <Team />}
      {!isOpen && <Footer />}
      {isOpen && <MobileLinks setOpen={setOpen} isOpen={isOpen} />}
    </div>
  );
}

export default App;
