import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/view/Homepage';
import About from './components/view/About';
import Contact from './components/view/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/> } />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
