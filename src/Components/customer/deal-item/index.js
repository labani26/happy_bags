import "./index.css"; // Your existing CSS for custom styles
// import { useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  const { product, onAddClicked } = props; // Destructure props
  // const navigate = useNavigate();

  const addToCart = () => {
    onAddClicked(); // Trigger the parent function to handle adding the product to the cart
    console.log("Add button Clicked"); // Log for debugging
  };

  // const buyNow = () => {
  //   navigate('/updateUserDetails', { state: product._id });
  // }

  const imageUrl = `https://happy-bags-4.onrender.com${product.image}`;

  return (
    <div className="card h-100"> {/* Ensures the card takes the full height available */}
      <img
        src={imageUrl}
        alt={product.name}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }} // Consistent image height
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
        <p className="card-text">Rs: {product.price}</p>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
          {/* <button type="button" className="btn btn-secondary" onClick={buyNow}>
            Buy now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
