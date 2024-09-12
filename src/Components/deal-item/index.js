// import "./index.css"
// // import bag1 from "../../../../../media/bags/src/Components/deal-item/index.js"
// // import bag1 from "./Components/images/bag1.jpeg"
// //import bag1 from "../../Components/images/bag1.jpeg"

// const ProductItem = (props) => {
//     const {product, onAddClicked } = props;

//     const addToCart = () => {
//           onAddClicked();
//           console.log("Add button Clicked");
//     };

//    return (

//     <li className="product-item">
//         <img src={product.imageUrl} alt={product.name} />
//         <h4>{product.name}</h4>
//         <h5>{product.brand}</h5>
//         <p>{product.price}</p>
//         <div className="add-cart-container">
//         <button type="button" className="add-cart-btn" onClick={addToCart}>Add to Cart</button>
//         </div>
//     </li>
//  )
// };

// export default ProductItem;
   

import "./index.css";
// Remove commented-out imports if they're unnecessary to keep the code clean.

const ProductItem = (props) => {
  const { product, onAddClicked } = props; // Destructure props for clarity

  // Function to handle 'Add to Cart' button click
  const addToCart = () => {
    onAddClicked(); // Trigger the parent function to handle adding the product to the cart
    console.log("Add button Clicked"); // Log for debugging
  };

  return (
    <li className="product-item">
      {/* Ensure the product's image URL is correct */}
      <img src={product.imageUrl} alt={product.name} className="product-image" />

      {/* Display product name */}
      <h4>{product.name}</h4>

      {/* Display product brand if available */}
      <h5>{product.brand}</h5>

      {/* Display product price */}
      <p>{product.price}</p>

      <div className="add-cart-container">
        {/* Button to add the product to the cart */}
        <button type="button" className="add-cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
