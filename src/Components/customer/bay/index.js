import { useState, useEffect } from "react";
import React from 'react';
import ProductItem from '../deal-item';
import axios from "axios";
import CustNav from "../CustNav";
import Cookies from 'js-cookie';  // To handle cookies

const Bay = () => {
    const [allProductlist, setAllProductList] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [user, setUser] = useState(null);  // State to hold user details

    // Fetch Products
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://192.168.1.9:4000/customer/getAllProduct');
            console.log("API Response:", response.data);
            return response.data;
        } catch (error) {
            console.log("Error fetching products", error);
            return [];
        }
    };

    // Fetch User Details
    const fetchUserDetails = async () => {
        try {
            const token = Cookies.get('token');  // Get JWT token from cookies
            const response = await axios.get('http://192.168.1.9:4000/customer/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("User Details:", response.data);
            return response.data;
        } catch (error) {
            console.log("Error fetching user details", error);
            return null;  // Return null on error
        }
    };

    // Fetch Cart Items Count
    const fetchCartCount = async () => {
        try {
            const token = Cookies.get('token');  // Get JWT token from cookies
            const response = await axios.get('http://192.168.1.9:4000/customer/getCustomerCart', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCartCount(response.data.length);  // Set cart count based on the number of items
        } catch (error) {
            console.log("Error fetching cart count", error);
            setCartCount(0);  // Reset count on error
        }
    };

    useEffect(() => {
        const loadProducts = async () => {
            const products = await fetchProducts();
            if (Array.isArray(products)) {
                setAllProductList(products);
            } else {
                console.error("Products is not an array:", products);
                setAllProductList([]);
            }
        };

        const loadUserDetails = async () => {
            const userDetails = await fetchUserDetails();
            if (userDetails) {
                setUser(userDetails);  // Set user details to state
            }
        };

        loadProducts();
        loadUserDetails();
        fetchCartCount();  // Fetch cart count when the component mounts
    }, []);

    const onAddClicked = async (productId) => {
        try {
            const token = Cookies.get('token');  // Get JWT token from cookies
            await axios.post('http://192.168.1.9:4000/customer/AddToCart', { productId }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCartCount(prevCount => prevCount + 1);  // Increment the cart count
        } catch (error) {
            console.log("Error adding to cart", error);
        }
    };

    return (
        <>
            <CustNav count={cartCount} userName={user?.name} />
            <div className="container mt-4"> {/* Bootstrap container */}
                <h2 className="deal text-center mb-4">All Products</h2>
                <div className="row"> {/* Bootstrap row */}
                    {allProductlist.map((product) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product._id}> {/* Adjusted column classes */}
                            <ProductItem
                                product={product}
                                onAddClicked={() => onAddClicked(product._id)}  // Pass the product ID when clicked
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Bay;
