import './App.css';
{/* import the zodiac array */}
import { zodiac } from './data.js';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header name='niki' />
      <Footer year={2022} />
      <Main zodiacs={zodiac} />
    </div>
  );
}

export default App;
