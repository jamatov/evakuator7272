import './App.scss';
import About from './Components/About';
import Footer from './Components/Footer';
import FormaZayavka from './Components/FormaZayavka';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Price from './Components/Price';
import Primushestva from './Components/Primushestva';
import UnderHeader from './Components/UnderHeader';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <UnderHeader/>
      <Price/>
      <Primushestva/>
      <About/>
      <FormaZayavka/>
      <Footer/>
    </div>
  );
}

export default App;
