import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sems1 from './components/Sems1';
import Cse_sem1 from './components/Cse_sem1';

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={[<Navbar />, <Main />]}/>
        <Route path="/home" element={[<Navbar />, <Main />]}/>
        <Route path="/cse" element={[<Navbar />, <Sems1 />]}/>
        <Route path="/cse-sem1" element={[<Navbar />, <Cse_sem1/>]}/>
        <Route path="/cse-sem2" element={[<Navbar />]}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
