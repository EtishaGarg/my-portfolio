import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route index element={<Work/>}/>
        <Route index element={<About/>}/>
        <Route index element={<Contact/>}/>
    </Routes>
  );
}

export default App;
