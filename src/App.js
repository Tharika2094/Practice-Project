import react from 'react';
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import {Navbar} from './components/navbar'
import Home from './pages/home'
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
