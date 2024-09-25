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

    // Add to Cart Functionality
    const addToCart = async (productId) => {
        const token = Cookies.get('token');  // Get JWT token from cookies
        try {
            const response = await axios.post('http://192.168.1.9:4000/customer/AddToCart', { productId }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Add to Cart Response:", response.data);
            alert("Added to Cart");
            setCartCount(cartCount + 1);  // Increment cart count
        } catch (error) {
            console.error("Error adding to cart", error);
        }
    };

    useEffect(() => {
        // Load products
        const loadProducts = async () => {
            const products = await fetchProducts();
            if (Array.isArray(products)) {
                setAllProductList(products);
            } else {
                console.error("Products is not an array:", products);
                setAllProductList([]);
            }
        };

        // Load user details
        const loadUserDetails = async () => {
            const userDetails = await fetchUserDetails();
            if (userDetails) {
                setUser(userDetails);  // Set user details to state
            }
        };

        loadProducts();
        loadUserDetails();
    }, []);

    return (
        <>
            <CustNav count={cartCount} userName={user?.name} />

            <div className="product-selection">
                <h2 className="deal">All Products</h2>
                <ul className="product-row-list">
                    {allProductlist.map((product) => (
                        <ProductItem
                            product={product}
                            key={product._id}
                            onAddClicked={() => addToCart(product._id)}  // Call addToCart on click
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Bay;
