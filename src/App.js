import "./App.css";
import Header from "./components/HeaderAndFooter/Header";
import Footer from "./components/HeaderAndFooter/Footer";
import { Container } from "react-bootstrap";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/menu/Main";
import Cart from "./components/Cart/Cart";
import Home from "./components/menu/Home";
import { ToastContainer } from "react-toastify";
import Register from "./login/Register";
import { CartProvider, useCart } from "react-use-cart";
import EmpListing from "./admin/EmpListing"
import EmpCreate from "./admin/EmpCreate"
import EmpDetail from "./admin/EmpDetail"
import EmpEdit from "./admin/EmpEdit"
import GT from "./components/menu/GT";
import Admin from "./admin/Admin";

function App() {
  return (
    <div>
      <ToastContainer theme="colored" position="top-center" />
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/GT" element={<GT />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route>
            <Route path="/admin" element={<Admin />}/>
            
              {/* <Route  path="/account" element={<Account />} /> */}
              {/* <Route path="/product" element={<Product />} /> */}
              <Route path='/emp' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
