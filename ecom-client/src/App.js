import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navigation/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideBar from "./components/SideBar/SideBar";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";

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
      <PrivateRoutes exact path="/" element={PrivateScreen} />
      <Navbar click={() => setSideToggle(true)} />
      <SideBar show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          {/* <Route exact path="/" element={<HomeScreen />} /> */}
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/login" element={<LogInScreen />} />
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotpasswordScreen />}
          />
          <Route
            exact
            path="/resetpassword/:resetToken"
            element={<ResetPasswordScreen />}
          />
          <Route exact path="/product/:id" element={<ProductDetailScreen />} />
          <Route exact path="/cart" element={<CartInfoScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
