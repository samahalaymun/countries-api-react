import './App.css'
import { BrowserRouter as Router, Routes ,Route,HashRouter } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/pages/Home';
import  Details  from './components/pages/Details';
import { Box } from '@mui/material';
import { Context } from '../src/Helper/Context'
import { useContext } from 'react';
function App() {
  const {theme} = useContext(Context)
  return (
    <HashRouter>
     <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:country" element={<Details />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
