import './App.css';
import Home from './pages/home/Home';
import Navbar from "./components/Navbar"
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductDescription from './pages/productDescription/ProductDescription';
import CartCheckout from './pages/CartCheckout';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Orders from './pages/Orders'
import OrderInfo from './pages/OrderInfo';
import UserProfile from './pages/UserProfile';
import AdminHome from './pages/admin/AdminHome';
import AdminAddProduct from './pages/admin/AdminAddProduct';
import AdminOrdersList from './pages/admin/AdminOrdersList';
import AdminProductsList from './pages/admin/AdminProductsList';
import AdminUsersList from './pages/admin/AdminUsersList';
import AdminEditProduct from './pages/admin/AdminEditProduct';

export const URL = process.env.REACT_APP_SERVER_URL


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/cartcheckout" element={<CartCheckout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderinfo/:orderid" element={<OrderInfo />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminHome />}>
            <Route path="/admin/userslist" element={<AdminUsersList />} />
            <Route path="/admin/productslist" element={<AdminProductsList />} />
            <Route path="/admin/addnewproduct" element={<AdminAddProduct />} />
            <Route path="/admin/orderslist" element={<AdminOrdersList />} />
            <Route path="/admin/editproduct/:id" element={<AdminEditProduct/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
