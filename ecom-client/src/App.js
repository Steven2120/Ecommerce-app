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

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideBar show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Routes>
        <Route
          path="/login"
          element={<LogInScreen />}
          render={() => <Navigate to="/" />}
        />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgotpassword" element={<ForgotpasswordScreen />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/resetpassword/:resetToken"
          element={
            <PrivateRoute>
              <ResetPasswordScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <ProductDetailScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartInfoScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
