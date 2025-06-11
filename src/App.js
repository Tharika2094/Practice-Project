import react from 'react';
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {Navbar} from './components/navbar'
import Home from './pages/home/home'
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
