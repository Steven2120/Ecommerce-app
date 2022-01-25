import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navigation/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideBar from "./components/SideBar/SideBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import CartInfoScreen from "./screens/CartInfoScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import LogInScreen from "./screens/LogInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotpasswordScreen from "./screens/ForgotpasswordScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import PrivateScreen from "./screens/PrivateScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideBar show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <PrivateRoute exact path="/" element={<PrivateScreen />} />
      <Routes>
        <Route
          exact
          path="/login"
          element={<LogInScreen />}
          render={() => <Navigate to="/" />}
        />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route
          exact
          path="/forgotpassword"
          element={<ForgotpasswordScreen />}
        />
      </Routes>
      {/* <PrivateRoute
          exact
          path="/resetpassword/:resetToken"
          element={<ResetPasswordScreen />}
        />
        <PrivateRoute
          exact
          path="/product/:id"
          element={<ProductDetailScreen />}
        />
        <PrivateRoute exact path="/cart" element={<CartInfoScreen />} /> */}
    </Router>
  );
}

export default App;
