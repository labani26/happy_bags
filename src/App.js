import Footer from "./Components/base-comp/footer";
import About from "./Components/base-comp/about/About";
import SignupForm from "./Components/customer/signupForm/SignupForm";
// import Loginform from "./Components/customer/loginForm/Loginform";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import AdminLogin from "./Components/admins/adminLogin/adminLogin";
import AdminSignup from "./Components/admins/adminSignup/adminSignup";
import AdminAddProduct from "./Components/admins/adminAddProduct/adminAddProduct";
import UpdateUserDetails from "./Components/customer/updateUserDetails/UpdateUserDetails";
import CreateOrder from "./Components/customer/createOrder/CreateOrder";
import Bay from "./Components/customer/bay";
import Landing from "./Components/base-comp/landing";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";
import CartPage from "./Components/customer/cartPage";

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path = "/" element={<Landing />} />
          <Route exact path="/Bay" element={<Bay />} />
          <Route exact path = "/About" element={<About/>} />
          <Route exact path = "/Signup" element={<SignupForm />} />
          {/* <Route exact path="/Login" element={<Loginform />} /> */}
          <Route exact path="/adminLogin" element={< AdminLogin />} />
          <Route exact path="/adminSignup" element={< AdminSignup />} />
          <Route exact path="/addProduct" element={< AdminAddProduct />} />
          <Route exact path="/updateUserDetails" element={<ProtectedRoute> < UpdateUserDetails /> </ProtectedRoute>} />
          <Route exact path="/createOrder" element={< CreateOrder />} />
          <Route exact path="/cartPage" element={< CartPage />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </Router>
    );
  };
  
  export default App;