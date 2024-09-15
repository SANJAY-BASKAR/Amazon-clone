import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import reducer, { initialState } from "./reducer";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();


  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          {/* Add other routes here */}
          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
