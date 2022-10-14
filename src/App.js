import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/countries-api-react">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:country" element={<Details />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
