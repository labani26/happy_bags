import { useState, useEffect } from "react";
import Navbar from "./Components/base-comp/navigation/Navbar";
import Banner from "./Components/base-comp/banner";
import Footer from "./Components/base-comp/footer";
import ProductItem from "./Components/customer/deal-item";
import About from "./Components/base-comp/about/About";
import SignupForm from "./Components/customer/signupForm/SignupForm";
import Loginform from "./Components/customer/loginForm/Loginform";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import "./App.css"
import AdminLogin from "./Components/admins/adminLogin/adminLogin";
import AdminSignup from "./Components/admins/adminSignup/adminSignup";
import AdminAddProduct from "./Components/admins/adminAddProduct/adminAddProduct";
import UpdateUserDetails from "./Components/customer/updateUserDetails/UpdateUserDetails";
import CreateOrder from "./Components/customer/createOrder/CreateOrder";


// import ControlledCarousel from "./Components/carousel";

// const dealslist = [
//   {
//     id: 1,
//     imageUrl: bag1,
//     name: "Fastrack ladies bag",
//     brand: "Fastrack",
//     price: "Rs: 899",
//   },
//   {
//     id: 2,
//     imageUrl: bag2,
//     name: "Caprese ladies bag",
//     brand: "Caprese",
//     price: "Rs: 999",
//   },
//   {
//     id: 3,
//     imageUrl: bag3,
//     name: "Lavie ladies bag",
//     brand: "Lavie",
//     price: "Rs: 999",
//   },
//   {
//     id: 4,
//     imageUrl: bag4,
//     name: "Zouk ladies bag",
//     brand: "Zouk",
//     price: "Rs: 999",
//   },
//   {
//     id: 5,
//     imageUrl: bag5,
//     name: "Lino Perros ladies bag",
//     brand: "Lino Perros",
//     price: "Rs: 999",
//   },
//   {
//     id: 6,
//     imageUrl: bag6,
//     name: "Da Milano ladies bag",
//     brand: "Da Milano",
//     price: "Rs: 1499",
//   },
//   {
//     id: 7,
//     imageUrl: bag7,
//     name: "Burberry ladies bag",
//     brand: "Burberry",
//     price: "Rs: 1299",
//   },
//   {
//     id: 8,
//     imageUrl: bag8,
//     name: "Chumbak Boho ladies bag",
//     brand: "Chumbak Boho",
//     price: "Rs: 799",
//   },
//   {
//     id: 9,
//     imageUrl: baga,
//     name: "Fastrack ladies bag",
//     brand: "Fastrack",
//     price: "Rs: 899",
//   },
//   {
//     id: 10,
//     imageUrl: bagb,
//     name: "Caprese ladies bag",
//     brand: "Caprese",
//     price: "Rs: 1399",
//   },
//   {
//     id: 11,
//     imageUrl: bagc,
//     name: "Lavie ladies bag",
//     brand: "Lavie",
//     price: "Rs: 999",
//   },
//   {
//     id: 12,
//     imageUrl: bagd,
//     name: "Zouk ladies bag",
//     brand: "Zouk",
//     price: "Rs: 999",
//   },
//   {
//     id: 13,
//     imageUrl: bage,
//     name: "Lino Perros ladies bag",
//     brand: "Lino Perros",
//     price: "Rs: 999",
//   },
//   {
//     id: 14,
//     imageUrl: bagf,
//     name: "Da Milano ladies bag",
//     brand: "Da Milano",
//     price: "Rs: 2499",
//   },
//   {
//     id: 15,
//     imageUrl: bagg,
//     name: "Dior ladies bag",
//     brand: "Dior",
//     price: "Rs: 4999",
//   },
//   {
//     id: 16,
//     imageUrl: bagh,
//     name: "Chumbak Boho ladies bag",
//     brand: "Chumbak Boho",
//     price: "Rs: 999",
//   },
//   {
//     id: 15,
//     imageUrl: bagi,
//     name: "Dior ladies bag",
//     brand: "Dior",
//     price: "Rs: 899",
//   },
//   {
//     id: 16,
//     imageUrl: bagj,
//     name: "Caprese ladies bag",
//     brand: "Caprese",
//     price: "Rs: 1299",
//   },
//   {
//     id: 17,
//     imageUrl: bagk,
//     name: "Lavie ladies bag",
//     brand: "Lavie",
//     price: "Rs: 999",
//   },
//   {
//     id: 18,
//     imageUrl: bagl,
//     name: "Zouk ladies bag",
//     brand: "Zouk",
//     price: "Rs: 1099",
//   },
//   {
//     id: 19,
//     imageUrl: bagm,
//     name: "Lino Perros ladies bag",
//     brand: "Lino Perros",
//     price: "Rs: 1999",
//   },
//   {
//     id: 20,
//     imageUrl: bagn,
//     name: "Da Milano ladies bag",
//     brand: "Da Milano",
//     price: "Rs: 2499",
//   },
//   {
//     id: 21,
//     imageUrl: bago,
//     name: "Burberry ladies bag",
//     brand: "Burberry",
//     price: "Rs: 1999",
//   },
//   {
//     id: 22,
//     imageUrl: bagp,
//     name: "Chumbak Boho ladies bag",
//     brand: "Chumbak Boho",
//     price: "Rs:1299",
//   },
// ];

// const allProductlist = [
//   {
//     id: 100,
//     imageUrl: bag9,
//     name: "Valentino ladies bag",
//     brand: "Valentino",
//     price: "Rs: 9999",
//   },
//   {
//     id: 101,
//     imageUrl: bag10,
//     name: "Fendi ladies bag",
//     brand: "Fendi",
//     price: "Rs: 8999",
//   },
//   {
//     id: 102,
//     imageUrl: bag11,
//     name: "Esbeda ladies bag",
//     brand: "Esbeda",
//     price: "Rs: 10999",
//   },
//   {
//     id: 103,
//     imageUrl: bag12,
//     name: "Hermès ladies bag",
//     brand: "Hermès",
//     price: "Rs: 7999",
//   },
//   {
//     id: 104,
//     imageUrl: bag13,
//     name: "Gucci ladies bag",
//     brand: "Gucci",
//     price: "Rs: 10099",
//   },
//   {
//     id: 105,
//     imageUrl: bag14,
//     name: "Prada ladies bag",
//     brand: "Prada",
//     price: "Rs: 2999",
//   },
//   {
//     id: 106,
//     imageUrl: bag15,
//     name: "Hidesign ladies bag",
//     brand: "Hidesign",
//     price: "Rs: 3299",
//   },
//   {
//     id: 107,
//     imageUrl: bag16,
//     name: "Chumbak Boho ladies bag",
//     brand: "Chumbak Boho",
//     price: "Rs: 1799",
//   },
//   {
//     id: 108,
//     imageUrl: bag17,
//     name: "Fastrack ladies bag",
//     brand: "Fastrack",
//     price: "Rs: 1899",
//   },
//   {
//     id: 109,
//     imageUrl: bag18,
//     name: "Caprese ladies bag",
//     brand: "Caprese",
//     price: "Rs: 2999",
//   },
//   {
//     id: 110,
//     imageUrl: bag19,
//     name: "Lavie ladies bag",
//     brand: "Lavie",
//     price: "Rs: 1599",
//   },
//   {
//     id: 111,
//     imageUrl: bag20,
//     name: "Zouk ladies bag",
//     brand: "Zouk",
//     price: "Rs: 1999",
//   },
//   {
//     id: 112,
//     imageUrl: bag21,
//     name: "Lino Perros ladies bag",
//     brand: "Lino Perros",
//     price: "Rs: 1799",
//   },
//   {
//     id: 113,
//     imageUrl: bag22,
//     name: "Hidesign ladies bag",
//     brand: "Da Milano",
//     price: "Rs:7499",
//   },
//   {
//     id: 114,
//     imageUrl: bag23,
//     name: "Burberry ladies bag",
//     brand: "Burberry",
//     price: "Rs: 8299",
//   },
//   {
//     id: 115,
//     imageUrl: bag24,
//     name: "Chanel ladies bag",
//     brand: "Chanel",
//     price: "Rs: 9999",
//   },
//   {
//     id: 116,
//     imageUrl: bagq,
//     name: "Baggit ladies bag",
//     brand: "Baggit",
//     price: "Rs: 1899",
//   },
//   {
//     id: 117,
//     imageUrl: bagr,
//     name: "Caprese ladies bag",
//     brand: "Caprese",
//     price: "Rs: 1999",
//   },
//   {
//     id: 118,
//     imageUrl: bags,
//     name: "Lavie ladies bag",
//     brand: "Lavie",
//     price: "Rs: 1599",
//   },
//   {
//     id: 119,
//     imageUrl: bagt,
//     name: "Coach ladies bag",
//     brand: "Coach",
//     price: "Rs: 3999",
//   },
//   {
//     id: 120,
//     imageUrl: bagu,
//     name: "Peperone ladies bag",
//     brand: "Peperone",
//     price: "Rs: 19999",
//   },
//   {
//     id: 121,
//     imageUrl: bagv,
//     name: "Valentino ladies bag",
//     brand: "Valentino",
//     price: "Rs: 20499",
//   },
//   {
//     id: 122,
//     imageUrl: bagw,
//     name: "Dior ladies bag",
//     brand: "Dior",
//     price: "Rs: 24299",
//   },
//   {
//     id: 123,
//     imageUrl: bagx,
//     name: "Chloé ladies bag",
//     brand: "Chloé",
//     price: "Rs: 17599",
//   },

// ];


const App = () => {
  // State for cart count
    const [cartCount, setCartCount] = useState(0);
    // const [dealslist, setDealsList] = useState([]);
    const [allProductlist, setAllProductList] = useState([]);

  const fetchProducts = async() => {  //This asynchronous function fetches product data from a backend API
    try {
      const response = await axios.get('http://localhost:4000/customer/getAllProduct')
      console.log("API Response:", response.data)  // Ensure this is an array, or adjust based on the structure
      return response.data;

    } catch (error){
      console.log("Error fetchning products", error);
      return[];  // Return an empty array on error
    }
  }  

  useEffect(() => {   // Defines an asynchronous function to load products

    const loadProducts = async () => {
      const products = await fetchProducts();
      
      if (Array.isArray(products)) {   // Check if the "products" variable is an array
        setAllProductList(products);  // Set all products

      } else {
        console.error("Products is not an array:", products);
        setAllProductList([]); // Set 'allProductlist' to an empty array as well // Handle cases where products isn't an array
      }
    };
    loadProducts();
  }, []);   //The empty array as the second argument tells React to run this effect only once,

  

 // Handler to increase cart count when an item is added
 const onAddClicked = () => {
  setCartCount(cartCount + 1);
};

    return (
      <Router>
        <div className="header">
          <Navbar count={cartCount} /> 
          <Banner />     
          {/* <ControlledCarousel /> Uncomment when ready */}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="product-selection">
                  <h2 className="deal">All Products</h2>
                  <ul className="product-row-list">
                    {allProductlist.map((product) => (
                      <ProductItem
                        product={product}
                        key={product._id}
                        onAddClicked={onAddClicked}
                      />
                    ))}
                  </ul>
                </div>
              </>
            }
          />
          <Route exact path = "/About" element={<About/>} />
          <Route exact path = "/Signup" element={<SignupForm />} />
          <Route exact path="/Login" element={<Loginform />} />
          <Route exact path="/adminLogin" element={< AdminLogin />} />
          <Route exact path="/adminSignup" element={< AdminSignup />} />
          <Route exact path="/addProduct" element={< AdminAddProduct />} />
          <Route exact path="/updateUserDetails" element={< UpdateUserDetails />} />
          <Route exact path="/createOrder" element={< CreateOrder />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </Router>
    );
  };
  
  export default App;