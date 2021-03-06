import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/index"
import TabSwitch from "./components/TabSwitch"
import PortfolioCard from "./components/Card/index"
import Home from "./components/pages/Home/Home"

function App() {
  return (
    <div className="App">
      <TabSwitch />
      <Footer />
    </div>
  );
}

export default App;
