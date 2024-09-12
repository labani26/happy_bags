import { useState } from "react";
import Navbar from "./Components/navigation/Navbar";
import Banner from "./Components/banner";
import Footer from "./Components/footer";
import ProductItem from "./Components/deal-item";

import "./App.css"
import bag1 from "./Components/images/bag1.jpeg"
import bag2 from "./Components/images/bag2.jpeg"
import bag3 from "./Components/images/bag3.jpeg"
import bag4 from "./Components/images/bag4.jpeg"
import bag5 from "./Components/images/bag5.jpeg"
import bag6 from "./Components/images/bag6.jpeg"
import bag7 from "./Components/images/bag7.jpeg"
import bag8 from "./Components/images/bag8.jpeg"
import bag9 from "./Components/images/bag9.jpeg"
import bag10 from "./Components/images/bag10.jpeg"
import bag11 from "./Components/images/bag11.jpeg"
import bag12 from "./Components/images/bag12.jpeg"
import bag13 from "./Components/images/bag13.jpeg"
import bag14 from "./Components/images/bag14.jpeg"
import bag15 from "./Components/images/bag15.jpeg"
import bag16 from "./Components/images/bag16.jpeg"
import bag17 from "./Components/images/bag17.jpeg"
import bag18 from "./Components/images/bag18.jpeg"
import bag19 from "./Components/images/bag19.jpeg"
import bag20 from "./Components/images/bag20.jpeg"
import bag21 from "./Components/images/bag21.jpeg"
import bag22 from "./Components/images/bag22.jpeg"
import bag23 from "./Components/images/bag23.jpeg"
import bag24 from "./Components/images/bag24.jpeg"
import baga from "./Components/images/baga.jpeg"
import bagb from "./Components/images/bagb.jpeg"
import bagc from "./Components/images/bagc.jpeg"
import bagd from "./Components/images/bagd.jpeg"
import bage from "./Components/images/bage.jpeg"
import bagf from "./Components/images/bagf.jpeg"
import bagg from "./Components/images/bagg.jpeg"
import bagh from "./Components/images/bagh.jpeg"
import bagi from "./Components/images/bagi.jpeg"
import bagj from "./Components/images/bagj.jpeg"
import bagk from "./Components/images/bagk.jpeg"
import bagl from "./Components/images/bagl.jpeg"
import bagm from "./Components/images/bagm.jpeg"
import bagn from "./Components/images/bagn.jpeg"
import bago from "./Components/images/bago.jpeg"
import bagp from "./Components/images/bagp.jpeg"
import bagq from "./Components/images/bagq.jpeg"
import bagr from "./Components/images/bagr.jpeg"
import bags from "./Components/images/bags.jpeg"
import bagt from "./Components/images/bagt.jpeg"
import bagu from "./Components/images/bagu.jpeg"
import bagv from "./Components/images/bagv.jpeg"
import bagw from "./Components/images/bagw.jpeg"
import bagx from "./Components/images/bagx.jpeg"
import Loginform from "./Components/loginForm/Loginform";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ControlledCarousel from "./Components/carousel";



const dealslist = [
  {
    id: 1,
    imageUrl: bag1,
    name: "Fastrack ladies bag",
    brand: "Fastrack",
    price: "Rs: 899",
  },
  {
    id: 2,
    imageUrl: bag2,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: "Rs: 999",
  },
  {
    id: 3,
    imageUrl: bag3,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: "Rs: 999",
  },
  {
    id: 4,
    imageUrl: bag4,
    name: "Zouk ladies bag",
    brand: "Zouk",
    price: "Rs: 999",
  },
  {
    id: 5,
    imageUrl: bag5,
    name: "Lino Perros ladies bag",
    brand: "Lino Perros",
    price: "Rs: 999",
  },
  {
    id: 6,
    imageUrl: bag6,
    name: "Da Milano ladies bag",
    brand: "Da Milano",
    price: "Rs: 1499",
  },
  {
    id: 7,
    imageUrl: bag7,
    name: "Burberry ladies bag",
    brand: "Burberry",
    price: "Rs: 1299",
  },
  {
    id: 8,
    imageUrl: bag8,
    name: "Chumbak Boho ladies bag",
    brand: "Chumbak Boho",
    price: "Rs: 799",
  },
  {
    id: 9,
    imageUrl: baga,
    name: "Fastrack ladies bag",
    brand: "Fastrack",
    price: "Rs: 899",
  },
  {
    id: 10,
    imageUrl: bagb,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: "Rs: 1399",
  },
  {
    id: 11,
    imageUrl: bagc,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: "Rs: 999",
  },
  {
    id: 12,
    imageUrl: bagd,
    name: "Zouk ladies bag",
    brand: "Zouk",
    price: "Rs: 999",
  },
  {
    id: 13,
    imageUrl: bage,
    name: "Lino Perros ladies bag",
    brand: "Lino Perros",
    price: "Rs: 999",
  },
  {
    id: 14,
    imageUrl: bagf,
    name: "Da Milano ladies bag",
    brand: "Da Milano",
    price: "Rs: 2499",
  },
  {
    id: 15,
    imageUrl: bagg,
    name: "Dior ladies bag",
    brand: "Dior",
    price: "Rs: 4999",
  },
  {
    id: 16,
    imageUrl: bagh,
    name: "Chumbak Boho ladies bag",
    brand: "Chumbak Boho",
    price: "Rs: 999",
  },
  {
    id: 15,
    imageUrl: bagi,
    name: "Dior ladies bag",
    brand: "Dior",
    price: "Rs: 899",
  },
  {
    id: 16,
    imageUrl: bagj,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: "Rs: 1299",
  },
  {
    id: 17,
    imageUrl: bagk,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: "Rs: 999",
  },
  {
    id: 18,
    imageUrl: bagl,
    name: "Zouk ladies bag",
    brand: "Zouk",
    price: "Rs: 1099",
  },
  {
    id: 19,
    imageUrl: bagm,
    name: "Lino Perros ladies bag",
    brand: "Lino Perros",
    price: "Rs: 1999",
  },
  {
    id: 20,
    imageUrl: bagn,
    name: "Da Milano ladies bag",
    brand: "Da Milano",
    price: "Rs: 2499",
  },
  {
    id: 21,
    imageUrl: bago,
    name: "Burberry ladies bag",
    brand: "Burberry",
    price: "Rs: 1999",
  },
  {
    id: 22,
    imageUrl: bagp,
    name: "Chumbak Boho ladies bag",
    brand: "Chumbak Boho",
    price: "Rs:1299",
  },
];

const allProductlist = [
  {
    id: 100,
    imageUrl: bag9,
    name: "Valentino ladies bag",
    brand: "Valentino",
    price: "Rs: 9999",
  },
  {
    id: 101,
    imageUrl: bag10,
    name: "Fendi ladies bag",
    brand: "Fendi",
    price: "Rs: 8999",
  },
  {
    id: 102,
    imageUrl: bag11,
    name: "Esbeda ladies bag",
    brand: "Esbeda",
    price: "Rs: 10999",
  },
  {
    id: 103,
    imageUrl: bag12,
    name: "Hermès ladies bag",
    brand: "Hermès",
    price: "Rs: 7999",
  },
  {
    id: 104,
    imageUrl: bag13,
    name: "Gucci ladies bag",
    brand: "Gucci",
    price: "Rs: 10099",
  },
  {
    id: 105,
    imageUrl: bag14,
    name: "Prada ladies bag",
    brand: "Prada",
    price: "Rs: 2999",
  },
  {
    id: 106,
    imageUrl: bag15,
    name: "Hidesign ladies bag",
    brand: "Hidesign",
    price: "Rs: 3299",
  },
  {
    id: 107,
    imageUrl: bag16,
    name: "Chumbak Boho ladies bag",
    brand: "Chumbak Boho",
    price: "Rs: 1799",
  },
  {
    id: 108,
    imageUrl: bag17,
    name: "Fastrack ladies bag",
    brand: "Fastrack",
    price: "Rs: 1899",
  },
  {
    id: 109,
    imageUrl: bag18,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: "Rs: 2999",
  },
  {
    id: 110,
    imageUrl: bag19,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: "Rs: 1599",
  },
  {
    id: 111,
    imageUrl: bag20,
    name: "Zouk ladies bag",
    brand: "Zouk",
    price: "Rs: 1999",
  },
  {
    id: 112,
    imageUrl: bag21,
    name: "Lino Perros ladies bag",
    brand: "Lino Perros",
    price: "Rs: 1799",
  },
  {
    id: 113,
    imageUrl: bag22,
    name: "Hidesign ladies bag",
    brand: "Da Milano",
    price: "Rs:7499",
  },
  {
    id: 114,
    imageUrl: bag23,
    name: "Burberry ladies bag",
    brand: "Burberry",
    price: "Rs: 8299",
  },
  {
    id: 115,
    imageUrl: bag24,
    name: "Chanel ladies bag",
    brand: "Chanel",
    price: "Rs: 9999",
  },
  {
    id: 116,
    imageUrl: bagq,
    name: "Baggit ladies bag",
    brand: "Baggit",
    price: "Rs: 1899",
  },
  {
    id: 117,
    imageUrl: bagr,
    name: "Caprese ladies bag",
    brand: "Caprese",
    price: "Rs: 1999",
  },
  {
    id: 118,
    imageUrl: bags,
    name: "Lavie ladies bag",
    brand: "Lavie",
    price: "Rs: 1599",
  },
  {
    id: 119,
    imageUrl: bagt,
    name: "Coach ladies bag",
    brand: "Coach",
    price: "Rs: 3999",
  },
  {
    id: 120,
    imageUrl: bagu,
    name: "Peperone ladies bag",
    brand: "Peperone",
    price: "Rs: 19999",
  },
  {
    id: 121,
    imageUrl: bagv,
    name: "Valentino ladies bag",
    brand: "Valentino",
    price: "Rs: 20499",
  },
  {
    id: 122,
    imageUrl: bagw,
    name: "Dior ladies bag",
    brand: "Dior",
    price: "Rs: 24299",
  },
  {
    id: 123,
    imageUrl: bagx,
    name: "Chloé ladies bag",
    brand: "Chloé",
    price: "Rs: 17599",
  },

];


const App = () => {
  // State for cart count
  const [cartCount, setCartCount] = useState(0);

 // Handler to increase cart count when an item is added
 const onAddClicked = () => {
  setCartCount(cartCount + 1);
};

    // return (
    //   <div>
    //     {/* Login Form Section */}
    //     <div>
    //       <Loginform />
    //     </div>

    //     {/* Header Section */}
    //     <div className="header">
    //       <Navbar count={cartCount} /> {/* Passing cartCount to Navbar */}
    //       <Banner />
    //       {/* <ControlledCarousel /> Uncomment when ready */}
    //     </div>

    //     {/* Deals of the Day Section */}
    //     <div className="product-selection">
    //       <h2 className="deal">Deals of the Day</h2>
    //       <ul className="product-row-list">
    //         {dealslist.map((eachobj) => (
    //           <ProductItem
    //             product={eachobj}
    //             key={eachobj.id}
    //             onAddClicked={this.onAddClicked} // Passing the click handler to ProductItem
    //           />
    //         ))}
    //       </ul>
    //     </div>

    //     {/* All Products Section */}
    //     <div className="product-selection">
    //       <h2 className="deal">All Products</h2>
    //       <ul className="product-row-list">
    //         {allProductlist.map((eachobj) => (
    //           <ProductItem
    //             product={eachobj}
    //             key={eachobj.id}
    //             onAddClicked={this.onAddClicked} // Passing the click handler to ProductItem
    //           />            
    //           ))}
    //       </ul>
    //     </div>

    //     {/* Footer Section */}
    //     <Footer />
    //   </div>
    // );

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
                  <h2 className="deal">Deals of the Day</h2>
                  <ul className="product-row-list">
                    {dealslist.map((eachobj) => (
                      <ProductItem
                        product={eachobj}
                        key={eachobj.id}
                        onAddClicked={onAddClicked}
                      />
                    ))}
                  </ul>
                </div>
  
                <div className="product-selection">
                  <h2 className="deal">All Products</h2>
                  <ul className="product-row-list">
                    {allProductlist.map((eachobj) => (
                      <ProductItem
                        product={eachobj}
                        key={eachobj.id}
                        onAddClicked={onAddClicked}
                      />
                    ))}
                  </ul>
                </div>
              </>
            }
          />
  
          {/* Login Page */}
          <Route exact path="/Login" element={<Loginform />} />
        </Routes>
  
        {/* Footer */}
        <Footer />
      </Router>
    );
  };
  
  export default App;