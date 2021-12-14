import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import HeadBanner from './components/HeadBanner/HeadBanner';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <Navbar></Navbar>
      <HeadBanner></HeadBanner>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
