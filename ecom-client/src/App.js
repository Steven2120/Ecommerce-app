import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.css";

import CartInfoScreen from "./screens/CartInfoScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Backdrop />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductDetailScreen />} />
          <Route exact path="/cart" element={<CartInfoScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
