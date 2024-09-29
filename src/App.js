import React, { useEffect } from "react";
import { auth } from "./firebase"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Orders from "./Orders";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import reducer, { initialState } from "./reducer";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Pzs4yBypPfLNtcmgxs60gSud7P4xtAby8645h6GK933EDn8jXQWeESOfeG2BZFHM1qKSHbA0TMc1zFg02SlUUpJ00Syyfpy19"
)


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          {/* Add other routes here */}
          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path="/orders" element={<><Header /><Orders /><Footer /></>} />

          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer />
            </>
            } 
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
