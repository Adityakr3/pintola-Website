import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
