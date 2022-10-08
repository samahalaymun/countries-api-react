import './App.css'
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/pages/Home';
import  Details  from './components/pages/Details';
import { Box } from '@mui/material';
import { Context } from '../src/Helper/Context'
import { useContext } from 'react';
function App() {
  const {theme} = useContext(Context)
  return (
    <Box>
    <Router basename="/">
     <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:country" element={<Details />} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
