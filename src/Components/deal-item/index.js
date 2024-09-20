// ProductItem.js

import "./index.css";

const ProductItem = (props) => {
  const { product, onAddClicked } = props; // Destructure props
  console.log("Product Image URL:", product.image); // Log the image URL for debugging

  // Function to handle 'Add to Cart' button click
  const addToCart = () => {
    onAddClicked(); // Trigger the parent function to handle adding the product to the cart
    console.log("Add button Clicked"); // Log for debugging
  };
  const imageUrl = `http://localhost:4000${product.image}`;

  return (
    <li className="product-item">
      {/* Display the product image */}
      <img 
        src={imageUrl} 
        alt={product.name} 
        className="product-image" 
      />

      {/* Display product name */}
      <h4>{product.name}</h4>

      {/* Display product brand if available */}
      <h5>{product.brand}</h5>

      {/* Display product price */}
      <p>{product.price}</p>

      <p>{product.description}</p>

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
