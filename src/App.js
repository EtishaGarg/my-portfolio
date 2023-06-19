import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> */}
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
