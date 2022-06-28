import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CatFacts from './components/CatFacts'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CatFacts />
    </div>
  );
}

export default App