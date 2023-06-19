import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Layout from './components/Home';
import Layout from './components/Work';
import Layout from './components/About';
import Layout from './components/Contact';
import './App.css';

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
